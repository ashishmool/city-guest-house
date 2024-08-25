import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { saveRoom } from '../../../services/roomService';
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

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
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

const AddRoom = () => {
    const [roomData, setRoomData] = useState({
        name: '',
        description: '',
        size: '',
        maxPerson: '',
        price: '',
        image: null,
    });

    const navigate = useNavigate();

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
        formData.append('size', roomData.size);
        formData.append('maxPerson', roomData.maxPerson);
        formData.append('price', roomData.price);
        formData.append('image', roomData.image);

        try {
            await saveRoom(formData);
            toast.success('Room added successfully!');
            navigate('/dashboard/list-rooms'); // Redirect to the room listing page
        } catch (error) {
            console.error('Failed to save the room:', error);
            toast.error('Failed to add the room. Please try again.');
        }
    };

    return (
        <Container>
            <h1>Add New Room</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Room Name"
                    value={roomData.name}
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="description"
                    placeholder="Description"
                    value={roomData.description}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="size"
                    placeholder="Room Size (sq ft)"
                    value={roomData.size}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="maxPerson"
                    placeholder="Maximum Occupancy"
                    value={roomData.maxPerson}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="price"
                    placeholder="Price per Night (USD)"
                    value={roomData.price}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Add Room</Button>
            </Form>
        </Container>
    );
};

export default AddRoom;
