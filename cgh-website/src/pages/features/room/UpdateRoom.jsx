import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRoomById, updateRoom } from '../../../services/roomService';
import { RoomProvider } from '../../../context/RoomContext';
import { toast } from 'react-toastify';

const UpdateRoom = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loadRooms } = useContext(RoomProvider);
    const [roomData, setRoomData] = useState({
        name: '',
        description: '',
        price: 0,
        capacity: 0
    });

    useEffect(() => {
        const loadRoom = async () => {
            try {
                const room = await fetchRoomById(id);
                setRoomData(room);
            } catch (error) {
                toast.error('Failed to fetch room details');
            }
        };
        loadRoom();
    }, [id]);

    const handleChange = (e) => {
        setRoomData({
            ...roomData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateRoom(id, roomData);
            toast.success('Room updated successfully');
            loadRooms();
            navigate('/rooms');
        } catch (error) {
            toast.error('Failed to update room');
        }
    };

    return (
        <div className="update-room-form">
            <h2>Update Room</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={roomData.name}
                    onChange={handleChange}
                    placeholder="Room Name"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={roomData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                <input
                    type="number"
                    name="capacity"
                    value={roomData.capacity}
                    onChange={handleChange}
                    placeholder="Capacity"
                    required
                />
                <textarea
                    name="description"
                    value={roomData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <button type="submit">Update Room</button>
            </form>
        </div>
    );
};

export default UpdateRoom;
