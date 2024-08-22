// RoomContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getAllRooms } from "../services/roomService";

// Create the context
const RoomContext = createContext();

// Create a provider component
export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kid');
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        const data = await getAllRooms();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    setTotal(+adults[0] + +kids[0]);
  }, [adults, kids]);

  const resetRoomFilterData = () => {
    setAdults('1 Adult');
    setKids('0 Kid');
    setLoading(true);
    getAllRooms().then(data => {
      setRooms(data);
      setLoading(false);
    }).catch(error => {
      console.error('Error resetting rooms:', error);
      setLoading(false);
    });
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
    rooms, loading, adults, setAdults, kids, setKids, handleCheck, resetRoomFilterData,
  };

  return (
      <RoomContext.Provider value={shareWithChildren}>
        {children}
      </RoomContext.Provider>
  );
};

// Custom hook to use the RoomContext
export const useRoomContext = () => useContext(RoomContext);
