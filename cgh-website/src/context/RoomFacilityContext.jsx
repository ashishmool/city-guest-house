import React, { createContext, useState, useEffect } from 'react';
import { fetchRoomFacilities } from '../services/roomFacilitiesService';

export const RoomFacilityContext = createContext();

export const RoomFacilityProvider = ({ children }) => {
    const [facilities, setFacilities] = useState([]);
    const [count, setCount] = useState(0);

    const fetchCounts = async () => {
        try {
            const data = await fetchRoomFacilities();
            setFacilities(data);
            setCount(data.length);
        } catch (error) {
            console.error('Error fetching room facilities:', error);
        }
    };

    useEffect(() => {
        fetchCounts();
    }, []);

    return (
        <RoomFacilityContext.Provider value={{ facilities, count, fetchCounts }}>
            {children}
        </RoomFacilityContext.Provider>
    );
};
