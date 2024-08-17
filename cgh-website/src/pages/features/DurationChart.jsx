import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;
  & > *:first-child {
    margin-bottom: 1.6rem;
  }
  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
    { duration: "1 night", value: 0, color: "#ef4444" },
    { duration: "2 nights", value: 0, color: "#f97316" },
    { duration: "3 nights", value: 0, color: "#eab308" },
    { duration: "4-5 nights", value: 0, color: "#84cc16" },
    { duration: "6-7 nights", value: 0, color: "#22c55e" },
    { duration: "8-14 nights", value: 0, color: "#14b8a6" },
    { duration: "15-21 nights", value: 0, color: "#3b82f6" },
    { duration: "21+ nights", value: 0, color: "#a855f7" },
];

const startDataDark = [
    { duration: "1 night", value: 0, color: "#b91c1c" },
    { duration: "2 nights", value: 0, color: "#c2410c" },
    { duration: "3 nights", value: 0, color: "#a16207" },
    { duration: "4-5 nights", value: 0, color: "#4d7c0f" },
    { duration: "6-7 nights", value: 0, color: "#15803d" },
    { duration: "8-14 nights", value: 0, color: "#0f766e" },
    { duration: "15-21 nights", value: 0, color: "#1d4ed8" },
    { duration: "21+ nights", value: 0, color: "#6b21a8" },
];

function prepareData(confirmedStays, startData) {
    const durations = confirmedStays.map((stay) => stay.numNights);
    return startData.map((data) => {
        let label = data.duration;

        if (label === "1 night")
            data.value = durations.filter((duration) => duration === 1).length;

        if (label === "2 nights")
            data.value = durations.filter((duration) => duration === 2).length;

        if (label === "3 nights")
            data.value = durations.filter((duration) => duration === 3).length;

        if (label === "4-5 nights")
            data.value = durations.filter(
                (duration) => duration === 4 || duration === 5
            ).length;

        if (label === "6-7 nights")
            data.value = durations.filter(
                (duration) => duration === 6 || duration === 7
            ).length;

        if (label === "8-14 nights")
            data.value = durations.filter(
                (duration) => duration >= 8 && duration <= 14
            ).length;

        if (label === "15-21 nights")
            data.value = durations.filter(
                (duration) => duration >= 15 && duration <= 21
            ).length;

        if (label === "21+ nights")
            data.value = durations.filter((duration) => duration >= 21).length;

        return data;
    });
}

function DurationChart({ confirmedStays }) {
    const { isDarkMode } = useDarkMode();
    const startData = isDarkMode ? startDataDark : startDataLight;
    const data = prepareData(confirmedStays, startData);

    return (
        <ChartBox>
            <Heading as="h2">Stay duration summary</Heading>
            <ResponsiveContainer height={240} width="100%">
                <PieChart>
                    <Pie
                        data={data}
                        nameKey="duration"
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={100}
                        fill="#82ca9d"
                        paddingAngle={3}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={entry.duration}
                                fill={entry.color}
                                stroke={entry.color}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        verticalAlign="bottom"
                        height={24}
                        iconSize={24}
                        align="center"
                    />
                </PieChart>
            </ResponsiveContainer>
        </ChartBox>
    );
}

export default DurationChart;
