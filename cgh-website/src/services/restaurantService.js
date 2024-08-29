import axios from 'axios';

const BASE_URL = 'http://54.253.164.255:8080';

// Fetch all menu items
export const getAllMenus = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/menu/getAll`);
        return response.data;
    } catch (error) {
        console.error("Error fetching menu items:", error);
        throw error;
    }
};

// Fetch all categories
export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/getAll`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// Fetch menus with attached category names
export const getMenusWithCategoryNames = async () => {
    try {
        const [menus, categories] = await Promise.all([getAllMenus(), getAllCategories()]);

        // Debugging: Log the fetched data
        console.log('Fetched menus:', menus);
        console.log('Fetched categories:', categories);

        // Create a map of categories for quick lookup
        const categoryMap = new Map(categories.map(category => [category.id, category.name]));

        // Debugging: Log the category map
        console.log('Category map:', Array.from(categoryMap.entries()));

        // Attach category names to menu items
        const menusWithCategoryNames = menus.map(menu => {
            // Debugging: Log each menu item
            console.log('Processing menu item:', menu);
            return {
                ...menu,
                categoryName: categoryMap.get(menu.categoryId) || 'Unknown Category'
            };
        });

        return { menus: menusWithCategoryNames, categories };
    } catch (error) {
        console.error("Error fetching menus with category names:", error);
        throw error;
    }
};

// Save a new menu item
export const saveMenu = async (menuData) => {
    try {
        const response = await axios.post(`${BASE_URL}/menu/save`, menuData);
        return response.data;
    } catch (error) {
        console.error("Error saving menu item:", error);
        throw error;
    }
};

// Update an existing menu item
export const updateMenu = async (id, menuData) => {
    try {
        const response = await axios.put(`${BASE_URL}/menu/update/${id}`, menuData);
        return response.data;
    } catch (error) {
        console.error("Error updating menu item:", error);
        throw error;
    }
};

// Delete a menu item by ID
export const deleteMenuById = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/menu/delete/${id}`);
    } catch (error) {
        console.error("Error deleting menu item:", error);
        throw error;
    }
};

// Fetch a single menu item by ID
export const getMenuById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/menu/getById/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching menu item by ID:", error);
        throw error;
    }
};

// Fetch menus by category name
export const getMenusByCategory = async (category) => {
    try {
        const response = await axios.get(`${BASE_URL}/menu/findByCategory`, {
            params: { category }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching menus by category:", error);
        throw error;
    }
};


