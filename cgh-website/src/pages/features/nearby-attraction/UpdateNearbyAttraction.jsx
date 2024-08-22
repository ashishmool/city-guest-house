import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAttractions, updateAttraction } from '../../../services/nearbyAttraction';
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

const UpdateNearbyAttraction = () => {
    const { id } = useParams();
    const [attractionData, setAttractionData] = useState({
        name: '',
        description: '',
        location: '',
        contact: '',
        website: '',
        image: null,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const loadAttraction = async () => {
            try {
                const data = await fetchAttractions();
                const attraction = data.find((item) => item.id === parseInt(id));
                if (attraction) {
                    setAttractionData({
                        name: attraction.name,
                        description: attraction.description,
                        location: attraction.location || '',
                        contact: attraction.contact || '',
                        website: attraction.website || '',
                    });
                }
            } catch (error) {
                toast.error('Failed to load attraction data');
            }
        };
        loadAttraction();
    }, [id]);

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
            await updateAttraction(id, formData);
            toast.success('Attraction updated successfully!');
            navigate('/dashboard/list-attractions'); // Redirect back to the list
        } catch (error) {
            toast.error('Failed to update attraction');
        }
    };

    return (
        <Container>
            <h1><center><strong>Update Nearby Attraction</strong></center></h1>
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
                <Button type="submit">Update Attraction</Button>
            </Form>
        </Container>
    );
};

export default UpdateNearbyAttraction;
