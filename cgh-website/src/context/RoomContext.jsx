import { createContext, useContext, useEffect, useState } from "react";
import { getAllRooms } from "../services/roomService";

const RoomInfo = createContext();

export const RoomContext = ({ children }) => {
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

  const shareWithChildren = {
    rooms, loading, adults, setAdults, kids, setKids, handleCheck, resetRoomFilterData,
  };

  return (
      <RoomInfo.Provider value={shareWithChildren}>
        {children}
      </RoomInfo.Provider>
  );
};

export const useRoomContext = () => useContext(RoomInfo);
