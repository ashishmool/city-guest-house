import React, { useState, useEffect } from 'react';
import { getMenuById, updateMenu, getAllCategories } from '../../../services/restaurantService';
import { useParams, useNavigate } from 'react-router-dom';
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

const UpdateRestaurant = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [menuData, setMenuData] = useState({
        name: '',
        price: '',
        description: '',
        categoryId: ''
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchMenuAndCategories = async () => {
            try {
                const [menu, categoryData] = await Promise.all([getMenuById(id), getAllCategories()]);
                setMenuData(menu);
                setCategories(categoryData);
            } catch (error) {
                toast.error('Failed to load data');
            }
        };
        fetchMenuAndCategories();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuData({ ...menuData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateMenu(id, menuData);
            toast.success('Menu item updated successfully');
            navigate('/dashboard/list-restaurants');
        } catch (error) {
            toast.error('Failed to update menu item');
        }
    };

    return (
        <Container>
            <h2><center><strong>Update Menu Item</strong></center></h2>
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
                <TextArea
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
                <Button type="submit">Update Menu Item</Button>
            </Form>
        </Container>
    );
};

export default UpdateRestaurant;
