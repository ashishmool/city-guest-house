// // src/context/FacilityContext.jsx
//
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { getAllFacilities } from '../services/facilityService'; // Adjust the import as needed
//
// const FacilityContext = createContext();
//
// export const useFacility = () => useContext(FacilityContext);
//
// export const FacilityProvider = ({ children }) => {
//     const [facilities, setFacilities] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [count, setCount] = useState(0);
//
//     const fetchCounts = async () => {
//         try {
//             const data = await getAllFacilities();
//             setFacilities(data);
//             setCount(data.length);
//         } catch (error) {
//             console.error('Error fetching facilities:', error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         fetchCounts();
//     }, []);
//
//     const addFacility = (newFacility) => {
//         setFacilities((prevFacilities) => [...prevFacilities, newFacility]);
//         setCount((prevCount) => prevCount + 1);
//     };
//
//     const updateFacility = (updatedFacility) => {
//         setFacilities((prevFacilities) =>
//             prevFacilities.map((facility) =>
//                 facility.id === updatedFacility.id ? updatedFacility : facility
//             )
//         );
//     };
//
//     const deleteFacility = (facilityId) => {
//         setFacilities((prevFacilities) =>
//             prevFacilities.filter((facility) => facility.id !== facilityId)
//         );
//         setCount((prevCount) => prevCount - 1);
//     };
//
//     return (
//         <FacilityContext.Provider
//             value={{
//                 facilities,
//                 loading,
//                 count,
//                 fetchCounts,
//                 addFacility,
//                 updateFacility,
//                 deleteFacility,
//             }}
//         >
//             {children}
//         </FacilityContext.Provider>
//     );
// };
