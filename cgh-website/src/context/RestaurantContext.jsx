import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllMenus } from '../services/restaurantService'; // Adjust the import as needed

const RestaurantContext = createContext();

export const useRestaurant = () => useContext(RestaurantContext);

export const RestaurantProvider = ({ children }) => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    const fetchCounts = async () => {
        try {
            const data = await getAllMenus();
            setMenus(data);
            setCount(data.length);
        } catch (error) {
            console.error('Error fetching menus:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCounts();
    }, []);

    const addMenu = (newMenu) => {
        setMenus((prevMenus) => [...prevMenus, newMenu]);
        setCount((prevCount) => prevCount + 1);
    };

    const updateMenu = (updatedMenu) => {
        setMenus((prevMenus) =>
            prevMenus.map((menu) =>
                menu.id === updatedMenu.id ? updatedMenu : menu
            )
        );
    };

    const deleteMenu = (menuId) => {
        setMenus((prevMenus) =>
            prevMenus.filter((menu) => menu.id !== menuId)
        );
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <RestaurantContext.Provider
            value={{ menus, loading, count, fetchCounts, addMenu, updateMenu, deleteMenu }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};
