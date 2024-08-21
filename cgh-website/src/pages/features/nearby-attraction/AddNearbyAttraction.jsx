import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAttraction } from '../../../services/nearbyAttraction';
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

const AddNearbyAttraction = () => {
    const [attractionData, setAttractionData] = useState({
        name: '',
        description: '',
        image: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setAttractionData({
            ...attractionData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', attractionData.name);
        formData.append('description', attractionData.description);
        formData.append('image', attractionData.image);
        await saveAttraction(formData);
        navigate('/nearby-attractions'); // Redirect back to the list
    };

    return (
        <Container>
            <h1>Add Nearby Attraction</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={attractionData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={attractionData.description}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="file"
                    name="image"
                    onChange={handleChange}
                />
                <Button type="submit">Add Attraction</Button>
            </Form>
        </Container>
    );
};

export default AddNearbyAttraction;
