import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveRoom } from '../../../services/roomService';
import { RoomProvider } from '../../../context/RoomContext';
import { toast } from 'react-toastify';

const AddRoom = () => {
    const { loadRooms } = React.useContext(RoomProvider);
    const navigate = useNavigate();
    const [roomData, setRoomData] = useState({
        name: '',
        description: '',
        price: 0,
        capacity: 0
    });

    const handleChange = (e) => {
        setRoomData({
            ...roomData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await saveRoom(roomData);
            toast.success('Room added successfully');
            loadRooms();
            navigate('/rooms');
        } catch (error) {
            toast.error('Failed to add room');
        }
    };

    return (
        <div className="add-room-form">
            <h2>Add New Room</h2>
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
                <button type="submit">Add Room</button>
            </form>
        </div>
    );
};

export default AddRoom;
