// restaurantData.js

export const menuCategories = [
    { name: 'Appetizers' },
    { name: 'Main Courses' },
    { name: 'Desserts' },
    { name: 'Beverages' },
];

export const menuItems = [
    // Appetizers
    {
        id: 1,
        category: 'Appetizers',
        name: 'Bruschetta',
        description: 'Grilled bread topped with diced tomatoes, garlic, and basil.',
        price: '$8',
    },
    {
        id: 2,
        category: 'Appetizers',
        name: 'Stuffed Mushrooms',
        description: 'Mushrooms filled with a savory cream cheese mixture.',
        price: '$10',
    },

    // Main Courses
    {
        id: 3,
        category: 'Main Courses',
        name: 'Grilled Salmon',
        description: 'Served with a lemon butter sauce and a side of vegetables.',
        price: '$20',
    },
    {
        id: 4,
        category: 'Main Courses',
        name: 'Steak Frites',
        description: 'Juicy steak served with crispy fries and a side salad.',
        price: '$25',
    },

    // Desserts
    {
        id: 5,
        category: 'Desserts',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
        price: '$9',
    },
    {
        id: 6,
        category: 'Desserts',
        name: 'Tiramisu',
        description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.',
        price: '$8',
    },

    // Beverages
    {
        id: 7,
        category: 'Beverages',
        name: 'House Red Wine',
        description: 'A smooth and fruity red wine, perfect with any meal.',
        price: '$12 per glass',
    },
    {
        id: 8,
        category: 'Beverages',
        name: 'Sparkling Water',
        description: 'Refreshing sparkling water served with a slice of lemon.',
        price: '$4',
    },
];

export const restaurantRules = [
    {
        rules: 'No outside food or beverages allowed.',
    },
    {
        rules: 'Please dress in smart casual attire.',
    },
    {
        rules: 'Reservations are recommended, especially on weekends.',
    },
    {
        rules: 'Please inform us of any dietary restrictions or allergies.',
    },
    {
        rules: 'Children must be supervised at all times.',
    },
];
