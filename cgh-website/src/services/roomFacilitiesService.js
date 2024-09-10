// import axios from 'axios';
//
// const BASE_URL = 'http://localhost:8080/facilities'; // Adjust the base URL according to your API structure
//
// // Function to fetch facilities by room ID
// export const fetchFacilitiesByRoomId = async (roomId) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/room/${roomId}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching facilities by room ID:', error);
//         throw error;
//     }
// };
//
// // Function to fetch all room facilities
// export const fetchRoomFacilities = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/getAll`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching room facilities:', error);
//         throw error;
//     }
// };
//
// // Function to save a new room facility
// export const saveRoomFacility = async (facilityData) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/save`, facilityData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error saving room facility:', error);
//         throw error;
//     }
// };
//
// // Function to delete a room facility by ID
// export const deleteRoomFacilityById = async (id) => {
//     try {
//         await axios.delete(`${API_BASE_URL}/delete/${id}`);
//     } catch (error) {
//         console.error('Error deleting room facility:', error);
//         throw error;
//     }
// };
//
// // Function to update a room facility by ID
// export const updateRoomFacility = async (id, facilityData) => {
//     try {
//         const response = await axios.put(`${API_BASE_URL}/update/${id}`, facilityData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error updating room facility:', error);
//         throw error;
//     }
// };
