import { FaCheck } from "react-icons/fa";
import images from "../assets";


export const adultsList = [
    { name: '1 Adult' },
    { name: '2 Adults' },
    { name: '3 Adults' },
    { name: '4 Adults' },
]


export const kidsList = [
    { name: '0 Kid' },
    { name: '1 Kid' },
    { name: '2 Kids' },
    { name: '3 Kids' },
    { name: '4 Kids' },
]


export const sliderData = [
    {
        id: 1,
        title: 'Modern Contemporary Rooms',
        bg: images.ContemporaryRooms,
        btnNext: 'View Rooms',
        to: '/rooms',
    },
    {
        id: 2,
        title: 'Backyard Garden',
        bg: images.BackyardGarden,
        btnNext: 'View Nearby Attractions',
        to: '/attractions',
    },
    {
        id: 3,
        title: 'Rooftop Restaurant with Mini-Garden',
        bg: images.RooftopRestaurant,
        btnNext: 'View Menu',
        to: '/restaurant',
    },
]


export const hotelRules = [
    {
        rules: 'Check-in : 2:00 PM - 9:00 PM',
    },
    {
        rules: 'Check-out : 11:00 AM',
    },

]