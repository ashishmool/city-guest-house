import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllMenus } from '../services/restaurantService'; // Adjust the import as needed

const RestaurantContext = createContext();

export const useRestaurant = () => useContext(RestaurantContext);

export const RestaurantProvider = ({ children }) => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const data = await getAllMenus();
                setMenus(data);
            } catch (error) {
                console.error('Error fetching menus:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenus();
    }, []);

    const addMenu = (newMenu) => {
        setMenus((prevMenus) => [...prevMenus, newMenu]);
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
    };

    return (
        <RestaurantContext.Provider
            value={{ menus, loading, addMenu, updateMenu, deleteMenu }}
        >
            {children}
        </RestaurantContext.Provider>
    );
};
