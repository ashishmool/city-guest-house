import axios from 'axios';

const API_BASE_URL = 'http://54.253.164.255:8080/attractions'; // Adjust URL as needed

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

// Function to save a new attraction
export const saveAttraction = async (attractionData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/save`, attractionData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error saving attraction:', error);
        throw error;
    }
};

// Function to delete an attraction by ID
export const deleteAttractionById = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/delete/${id}`);
    } catch (error) {
        console.error('Error deleting attraction:', error);
        throw error;
    }
};

// Function to update an attraction by ID
export const updateAttraction = async (id, attractionData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/update/${id}`, attractionData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating attraction:', error);
        throw error;
    }
};

// Function to search for attractions by name
export const searchAttractionsByName = async (name) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, {
            params: { name },
        });
        return response.data;
    } catch (error) {
        console.error('Error searching attractions:', error);
        throw error;
    }
};
