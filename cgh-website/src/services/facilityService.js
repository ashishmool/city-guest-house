import axios from 'axios';

const API_URL = 'http://54.253.164.255:8080/facilities'; // Adjust the base URL as per your backend configuration

// Fetch all facilities
export const getAllFacilities = async () => {
    try {
        const response = await axios.get(`${API_URL}/getAll`);
        return response.data;
    } catch (error) {
        console.error('Error fetching facilities:', error);
        throw error;
    }
};

// Fetch a facility by ID
export const getFacilityById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/room/${id}`);
        console.log("Fetched::",response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching facility with ID ${id}:`, error);
        throw error;
    }
};

// Save new facilities for selected rooms
export const saveFacility = async (facilityData) => {
    try {
        const response = await axios.post(`${API_URL}/save`, facilityData);
        return response.data;
    } catch (error) {
        console.error('Error saving facility:', error);
        throw error;
    }
};

// Update a facility
export const updateFacility = async (id, facilityData) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, facilityData);
        return response.data;
    } catch (error) {
        console.error('Error updating facility:', error);
        throw error;
    }
};

// Delete a facility by ID
export const deleteFacilityById = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting facility with ID ${id}:`, error);
        throw error;
    }
};
