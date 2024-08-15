// roomService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/rooms'; // Adjust the base URL as per your backend configuration

// Fetch all rooms
export const getAllRooms = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
};

// Fetch a single room by ID
export const getRoomById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching room with ID ${id}:`, error);
        throw error;
    }
};
