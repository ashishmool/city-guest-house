import React, { useState, useEffect } from 'react';
import { getMenusWithCategoryNames, deleteMenuById } from '../../../services/restaurantService';
import { Link, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Container = styled.div`
  padding: 20px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px; /* Space between the button and search bar */
  margin-bottom: 20px; /* Space below the controls */
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AddButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #c33318;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #73260e;
  }

  svg {
    margin-left: 8px;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  position: relative;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 24px;
  }

  span {
    margin-top: 8px;
    font-size: 12px;
    color: #333;
  }
`;

const ListRestaurant = () => {
    const [menus, setMenus] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { fetchCounts } = useOutletContext(); // Get fetchCounts from context

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { menus: menuList } = await getMenusWithCategoryNames();
                setMenus(menuList);
            } catch (error) {
                toast.error('Failed to fetch menu items');
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this menu item?')) {
            try {
                await deleteMenuById(id);
                setMenus(menus.filter(menu => menu.id !== id));
                toast.success('Menu item deleted successfully');
                fetchCounts(); // Trigger count update in the dashboard
            } catch (error) {
                toast.error('Failed to delete menu item');
            }
        }
    };

    const filteredMenus = menus.filter(menu =>
        menu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        menu.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <h2><center><strong>Menu Items</strong></center></h2>
            <ControlsWrapper>
                <AddButton to="/dashboard/restaurant/add">
                    Add New Menu Item <FaPlus />
                </AddButton>
                <SearchInput
                    type="text"
                    placeholder="Search menus..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </ControlsWrapper>
            <MenuList>
                {filteredMenus.map((menu) => (
                    <MenuItem key={menu.id}>
                        <h3>{menu.name}</h3>
                        <p>Price: {menu.price}</p>
                        <p>Description: {menu.description}</p>
                        <p>Category: {menu.categoryName}</p>
                        <ActionContainer>
                            <Link to={`/dashboard/restaurant/update/${menu.id}`}>
                                <ActionButton>
                                    <FaEdit />
                                    <span>Edit</span>
                                </ActionButton>
                            </Link>
                            <ActionButton onClick={() => handleDelete(menu.id)}>
                                <FaTrash />
                                <span>Delete</span>
                            </ActionButton>
                        </ActionContainer>
                    </MenuItem>
                ))}
            </MenuList>
        </Container>
    );
};

export default ListRestaurant;
