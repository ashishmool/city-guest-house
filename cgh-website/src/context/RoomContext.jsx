import { createContext, useContext, useEffect, useState } from "react";
import { getAllRooms } from "../services/roomService";

// Create the context
const RoomContext = createContext();

// Create a provider component
export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0); // New count state
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(1);

  const fetchCounts = async () => {
    setLoading(true);
    try {
      const data = await getAllRooms();
      setRooms(data);
      setCount(data.length); // Set the count based on the number of rooms
    } catch (error) {
      console.error('Error fetching rooms:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounts(); // Fetch rooms and counts on mount
  }, []);

  useEffect(() => {
    setTotal(+adults[0] + +kids[0]);
  }, [adults, kids]);

  const resetRoomFilterData = () => {
    setAdults('1 Adult');
    setKids('0 Kid');
    fetchCounts(); // Reset and refetch rooms and counts
  };

  const handleCheck = ({ checkInDate, checkOutDate }) => {
    setLoading(true);
    const filterRooms = rooms.filter(room => total <= room.maxPerson);
    setTimeout(() => {
      setLoading(false);
      setRooms(filterRooms);
    }, 3000);
  };

  // Shared state and functions
  const shareWithChildren = {
    rooms, loading, count, adults, setAdults, kids, setKids, handleCheck, resetRoomFilterData, fetchCounts,
  };

  return (
      <RoomContext.Provider value={shareWithChildren}>
        {children}
      </RoomContext.Provider>
  );
};

// Custom hook to use the RoomContext
export const useRoomContext = () => useContext(RoomContext);
