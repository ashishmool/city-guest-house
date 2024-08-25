-- Inserting Rooms Data
INSERT INTO rooms (id, name, description, size, max_person, price, image)
VALUES
    (1001, 'Room w/ Mini Balcony',
     'A cozy, simple room featuring a comfortable bed, minimalistic decor, and a mini balcony offering a breath of fresh air and a small outdoor space to relax. Perfect for enjoying a morning coffee or evening breeze.',
     30, 3, 30.00,
     'balcony-room.jpg'),

    (2001, 'Street-View Room',
     'A comfortable, straightforward room with large windows offering a vibrant street view. Ideal for those who enjoy a glimpse of the city’s daily life from the comfort of their room.',
     28, 2, 25.00,
     'street-room.jpg'),

    (3001, 'Deluxe Room',
     'A spacious and elegantly designed deluxe room with premium furnishings, a plush bed, and modern amenities. Perfect for a luxurious stay, offering enhanced comfort and style for a memorable experience.',
     26, 2, 23.00,
     'deluxe-room.jpg'),

    (4001, 'Budget Single Room',
     'A compact and practical room designed for the budget-conscious single traveler. It offers all the essentials, including a comfortable bed and basic amenities, ideal for a simple and affordable stay.',
     14, 1, 18.00,
     'budget-room.jpg');

-- Insert facilities for Room ID 1001
INSERT INTO facilities (id, name, description, room_id) VALUES
                                                            (1001, 'Coffee Making Facility', 'FaCoffee', 1001),
                                                            (1002, 'Hot/Cold Shower', 'FaBath', 1001),
                                                            (1003, 'Restaurant On-Site', 'FaHotdog', 1001),
                                                            (1004, 'Drinks & Beverages', 'FaCocktail', 1001);

-- Insert facilities for Room ID 1002
INSERT INTO facilities (id, name, description, room_id) VALUES
                                                            (1005, 'Coffee Making Facility', 'FaCoffee', 2001),
                                                            (1006, 'Hot/Cold Shower', 'FaBath', 2001),
                                                            (1007, 'Restaurant On-Site', 'FaHotdog', 2001),
                                                            (1008, 'Drinks & Beverages', 'FaCocktail', 2001);

-- Insert facilities for Room ID 1003
INSERT INTO facilities (id, name, description, room_id) VALUES
                                                            (1009, 'Coffee Making Facility', 'FaCoffee', 3001),
                                                            (1010, 'Hot/Cold Shower', 'FaBath', 3001),
                                                            (1011, 'Restaurant On-Site', 'FaHotdog', 3001),
                                                            (1012, 'Drinks & Beverages', 'FaCocktail', 3001);

-- Insert facilities for Room ID 1004
INSERT INTO facilities (id, name, description, room_id) VALUES
                                                            (1013, 'Coffee Making Facility', 'FaCoffee', 4001),
                                                            (1014, 'Hot/Cold Shower', 'FaBath', 4001),
                                                            (1015, 'Restaurant On-Site', 'FaHotdog', 4001),
                                                            (1016, 'Drinks & Beverages', 'FaCocktail', 4001);

