import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getAllMenus = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/menu/getAll`);
        return response.data;
    } catch (error) {
        console.error("Error fetching menu items:", error);
        throw error;
    }
};

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/getAll`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

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
                categoryName: categoryMap.get(menu.categoryId) || 'Unknown Category' // Correct access
            };
        });

        return { menus: menusWithCategoryNames, categories };
    } catch (error) {
        console.error("Error fetching menus with category names:", error);
        throw error;
    }
};
