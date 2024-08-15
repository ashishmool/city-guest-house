// src/services/nearbyAttraction.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/attractions'; // Adjust URL as needed

// Function to get all attractions
export const fetchAttractions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/getAll`);
        return response.data;
    } catch (error) {
        console.error('Error fetching attractions:', error);
        throw error;
    }
};

// Optionally, you can define more functions for other API endpoints
