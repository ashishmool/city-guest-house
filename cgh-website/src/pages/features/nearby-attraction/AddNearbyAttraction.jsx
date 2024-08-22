import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
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
        location: '',
        contact: '',
        website: '',
        image: null,
    });

    const navigate = useNavigate();
    const { fetchCounts } = useOutletContext(); // Access fetchCounts from context

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
        formData.append('location', attractionData.location); // Ensure location is included
        formData.append('contact', attractionData.contact);   // Include contact if needed
        formData.append('website', attractionData.website);   // Include website
        formData.append('image', attractionData.image);

        try {
            await saveAttraction(formData);
            toast.success('Attraction added successfully!'); // Show success toast
            fetchCounts(); // Update attraction count in the dashboard
            navigate('/dashboard/list-attractions'); // Redirect after successful submission
        } catch (error) {
            console.error("Failed to save the attraction:", error);
            toast.error('Failed to add the attraction. Please try again.'); // Show error toast
        }
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
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={attractionData.location}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={attractionData.contact}
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={attractionData.website}
                    onChange={handleChange}
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
