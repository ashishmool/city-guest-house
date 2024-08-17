import axios from 'axios';

const BASE_URL = 'http://localhost:8080/room-facilities'; // Adjust the base URL according to your API structure

// Function to fetch facilities by room ID
export const fetchFacilitiesByRoomId = async (roomId) => {
    try {
        const response = await axios.get(`${BASE_URL}/room/${roomId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching facilities by room ID:', error);
        throw error;
    }
};

// You can add more functions here as needed for other API interactions related to facilities.
