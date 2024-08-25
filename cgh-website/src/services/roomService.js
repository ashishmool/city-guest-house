import axios from 'axios';

const API_URL = 'http://localhost:8080/rooms'; // Adjust the base URL as per your backend configuration

// Fetch all rooms
export const getAllRooms = async () => {
    try {
        const response = await axios.get(`${API_URL}/getAll`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
};

// Fetch a single room by ID
export const fetchRoomById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching room with ID ${id}:`, error);
        throw error;
    }
};

// Save a new room
export const saveRoom = async (roomData) => {
    try {
        const response = await axios.post(`${API_URL}/save`, roomData);
        return response.data;
    } catch (error) {
        console.error("Failed to save room", error);
        throw error;
    }
};

// Delete a room by ID
export const deleteRoomById = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete room with ID ${id}`, error);
        throw error;
    }
};

// Search rooms by name
export const searchRoomsByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}/search`, {
            params: { name }
        });
        return response.data;
    } catch (error) {
        console.error(`Error searching rooms by name: ${name}`, error);
        throw error;
    }
};

// Search rooms by maximum person capacity
export const searchRoomsByMaxPerson = async (maxPerson) => {
    try {
        const response = await axios.get(`${API_URL}/searchByMaxPerson`, {
            params: { maxPerson }
        });
        return response.data;
    } catch (error) {
        console.error(`Error searching rooms by max person capacity: ${maxPerson}`, error);
        throw error;
    }
};

// Search rooms by price range
export const searchRoomsByPriceRange = async (minPrice, maxPrice) => {
    try {
        const response = await axios.get(`${API_URL}/searchByPriceRange`, {
            params: { minPrice, maxPrice }
        });
        return response.data;
    } catch (error) {
        console.error(`Error searching rooms by price range: ${minPrice} - ${maxPrice}`, error);
        throw error;
    }
};

// Search rooms by multiple filters (name, maxPerson, minPrice, maxPrice)
export const searchRoomsByFilters = async (filters) => {
    try {
        const response = await axios.get(`${API_URL}/searchByFilters`, {
            params: filters
        });
        return response.data;
    } catch (error) {
        console.error('Error searching rooms with filters:', error);
        throw error;
    }
};

// Update a room by ID
export const updateRoom = async (id, roomData) => {
    try {
        const response = await axios.put(`${API_URL}/update/${id}`, roomData);
        return response.data;
    } catch (error) {
        console.error(`Failed to update room with ID ${id}`, error);
        throw error;
    }
};
