import React, { useState, useEffect } from 'react';
import { getMenuById, updateMenu, getAllCategories } from '../../../services/restaurantService';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
            navigate('/dashboard/list-restaurant');
        } catch (error) {
            toast.error('Failed to update menu item');
        }
    };

    return (
        <div>
            <h2>Update Menu Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={menuData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={menuData.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={menuData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Category:</label>
                    <select
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
                    </select>
                </div>
                <button type="submit">Update Menu Item</button>
            </form>
        </div>
    );
};

export default UpdateRestaurant;
