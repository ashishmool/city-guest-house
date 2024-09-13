import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRoomById, updateRoom } from '../../../services/roomService';
import { useRoomContext } from '../../../context/RoomContext';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const UpdateRoom = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { fetchCounts } = useRoomContext();
    const [roomData, setRoomData] = useState({
        name: '',
        description: '',
        price: 0,
        maxPerson: 0,
        size: 0, // Ensure size is included
        image: null,
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
        const { name, value, files } = e.target;
        setRoomData({
            ...roomData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', roomData.name);
        formData.append('description', roomData.description);
        formData.append('price', roomData.price);
        formData.append('maxPerson', roomData.maxPerson);
        formData.append('size', roomData.size); // Ensure size is appended
        if (roomData.image) {
            formData.append('image', roomData.image);
        }

        try {
            await updateRoom(id, formData);
            toast.success('Room updated successfully');
            fetchCounts();
            navigate('/dashboard/list-rooms');
        } catch (error) {
            toast.error('Failed to update room');
        }
    };

    return (
        <Container>
            <h2><center><strong>Update Room</strong></center></h2>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    value={roomData.name}
                    onChange={handleChange}
                    placeholder="Room Name"
                    required
                />
                <Input
                    type="number"
                    name="price"
                    value={roomData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                <Input
                    type="number"
                    name="size"
                    value={roomData.size} // Include size field
                    onChange={handleChange}
                    placeholder="Room Size"
                    required
                />
                <Input
                    type="number"
                    name="maxPerson"
                    value={roomData.maxPerson}
                    onChange={handleChange}
                    placeholder="Max Persons"
                    required
                />
                <TextArea
                    name="description"
                    value={roomData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    required
                />
                <Input
                    type="file"
                    name="image"
                    onChange={handleChange}
                />
                <Button type="submit">Update Room</Button>
            </Form>
        </Container>
    );
};

export default UpdateRoom;
