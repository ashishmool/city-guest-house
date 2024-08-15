import { createContext, useContext, useEffect, useState } from "react";
import { getAllRooms } from "../services/roomService"; // Import the service for API calls

const RoomInfo = createContext();

export const RoomContext = ({ children }) => {
  const [rooms, setRooms] = useState([]);  // Start with an empty array, will be populated with API data
  const [loading, setLoading] = useState(false);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(0);

  // Fetch rooms from API when the component mounts
  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);  // Start loading before making the request
      try {
        const data = await getAllRooms();  // Fetch rooms from the backend
        setRooms(data);  // Update rooms with data from the backend
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);  // Stop loading after the request is complete
      }
    };

    fetchRooms();
  }, []);  // Empty dependency array ensures this runs only once on mount

  // Update total persons whenever adults or kids state changes
  useEffect(() => {
    setTotal(+adults[0] + +kids[0]);
  }, [adults, kids]);

  // Reset the room filter data to initial state
  const resetRoomFilterData = () => {
    setAdults('1 Adult');
    setKids('0 Kid');

    // Fetch the rooms again from API instead of resetting to static roomData
    setLoading(true);
    getAllRooms().then(data => {
      setRooms(data);
      setLoading(false);
    }).catch(error => {
      console.error('Error resetting rooms:', error);
      setLoading(false);
    });
  };

  // Handle the "Check Now" button click
  const handleCheck = (e) => {
    e.preventDefault();
    setLoading(true);

    // Filter rooms based on total persons
    const filterRooms = rooms.filter(room => total <= room.maxPerson);

    setTimeout(() => {
      setLoading(false);
      setRooms(filterRooms);  // Update UI with the filtered rooms
    }, 3000);
  };

  const shareWithChildren = {
    rooms, loading,
    adults, setAdults,
    kids, setKids,
    handleCheck,
    resetRoomFilterData,
  };

  return (
      <RoomInfo.Provider value={shareWithChildren}>
        {children}
      </RoomInfo.Provider>
  );
};

export const useRoomContext = () => useContext(RoomInfo);
