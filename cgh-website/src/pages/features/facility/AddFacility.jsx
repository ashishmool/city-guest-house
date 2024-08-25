import React, { useState, useEffect } from 'react';
import { getAllRooms } from '../../../services/roomService';
import { saveFacility } from '../../../services/facilityService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddFacility = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [rooms, setRooms] = useState([]);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await getAllRooms();
                setRooms(data);
            } catch (error) {
                toast.error('Failed to fetch rooms');
            }
        };
        fetchRooms();
    }, []);

    const handleCheckboxChange = (roomId) => {
        setSelectedRooms((prevSelectedRooms) =>
            prevSelectedRooms.includes(roomId)
                ? prevSelectedRooms.filter((id) => id !== roomId)
                : [...prevSelectedRooms, roomId]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedRooms.length === 0) {
            toast.error('Please select at least one room');
            return;
        }

        try {
            // Send multiple requests, one for each selected room
            for (const roomId of selectedRooms) {
                const payload = {
                    name,
                    description,
                    roomId,
                };
                await saveFacility(payload);
            }
            toast.success('Facility added successfully');
            navigate('/dashboard/list-facilities');
        } catch (error) {
            toast.error('Failed to add facility');
        }
    };

    return (
        <Container>
            <h2>Add New Facility</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Facility Name</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Facility Description</Label>
                    <TextArea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Select Rooms:</Label>
                    {rooms.map((room) => (
                        <div key={room.id}>
                            <input
                                type="checkbox"
                                id={`room-${room.id}`}
                                checked={selectedRooms.includes(room.id)}
                                onChange={() => handleCheckboxChange(room.id)}
                            />
                            <label htmlFor={`room-${room.id}`}>{room.name}</label>
                        </div>
                    ))}
                </FormGroup>
                <Button type="submit">Add Facility</Button>
            </form>
        </Container>
    );
};

export default AddFacility;
