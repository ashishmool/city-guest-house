import React, { useState, useEffect } from 'react';
import { useRestaurant } from '../../../context/RestaurantContext';
import {getAllCategories, saveMenu} from '../../../services/restaurantService';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import {useNavigate, useOutletContext} from "react-router-dom";

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

const Select = styled.select`
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

const AddRestaurant = () => {
    const { addMenu } = useRestaurant(); // Use context to add the menu
    const [menuData, setMenuData] = useState({
        name: '',
        price: '',
        description: '',
        categoryId: ''
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryData = await getAllCategories();
                setCategories(categoryData);
            } catch (error) {
                toast.error('Failed to fetch categories');
            }
        };
        fetchCategories();
    }, []);

    const navigate = useNavigate();
    const { fetchCounts } = useOutletContext(); // Access fetchCounts from context

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuData({ ...menuData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...menuData,
                categoryId: Number(menuData.categoryId)
            };
            await saveMenu(payload); // Use context function to add the menu
            fetchCounts(); // Update attraction count in the dashboard
            navigate('/dashboard/list-restaurants'); // Redirect after successful submission
            toast.success('Menu item added successfully');
            setMenuData({
                name: '',
                price: '',
                description: '',
                categoryId: ''
            });
        } catch (error) {
            toast.error('Failed to add menu item');
        }
    };

    return (
        <Container>
            <h2>Add New Menu Item</h2>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={menuData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={menuData.price}
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="description"
                    placeholder="Description"
                    value={menuData.description}
                    onChange={handleChange}
                    required
                />
                <Select
                    name="categoryId"
                    value={menuData.categoryId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </Select>
                <Button type="submit">Add Menu Item</Button>
            </Form>
        </Container>
    );
};

export default AddRestaurant;
