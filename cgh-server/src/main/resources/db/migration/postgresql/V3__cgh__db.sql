-- Inserting Rooms Data
INSERT INTO rooms (id, name, description, size, max_person, price, image, image_lg)
VALUES
    (1, 'Room w/ Mini Balcony',
     'A cozy, simple room featuring a comfortable bed, minimalistic decor, and a mini balcony offering a breath of fresh air and a small outdoor space to relax. Perfect for enjoying a morning coffee or evening breeze.',
     30, 3, 30.00,
     'balcony-room.jpg', 'balcony-room.jpg'),

    (2, 'Street-View Room',
     'A comfortable, straightforward room with large windows offering a vibrant street view. Ideal for those who enjoy a glimpse of the city’s daily life from the comfort of their room.',
     28, 2, 25.00,
     'street-room.jpg', 'street-room.jpg'),

    (3, 'Deluxe Room',
     'A spacious and elegantly designed deluxe room with premium furnishings, a plush bed, and modern amenities. Perfect for a luxurious stay, offering enhanced comfort and style for a memorable experience.',
     26, 2, 23.00,
     'deluxe-room.jpg', 'deluxe-room.jpg'),

    (4, 'Budget Single Room',
     'A compact and practical room designed for the budget-conscious single traveler. It offers all the essentials, including a comfortable bed and basic amenities, ideal for a simple and affordable stay.',
     14, 1, 18.00,
     'budget-room.jpg', 'budget-room.jpg');

-- Inserting Room Facilities Data
INSERT INTO room_facilities (id, room_id, facility_name, facility_icon)
VALUES
    -- Facilities for Room w/ Mini Balcony
    (1, 1, 'Wifi', 'FaWifi'),
    (2, 1, 'Coffee', 'FaCoffee'),
    (3, 1, 'Bath', 'FaBath'),
    (4, 1, 'Parking Space', 'FaParking'),
    (5, 1, 'Breakfast', 'FaHotdog'),
    (6, 1, 'Drinks', 'FaCocktail'),

    -- Facilities for Street-View Room
    (7, 2, 'Wifi', 'FaWifi'),
    (8, 2, 'Coffee', 'FaCoffee'),
    (9, 2, 'Bath', 'FaBath'),
    (10, 2, 'Parking Space', 'FaParking'),
    (11, 2, 'Breakfast', 'FaHotdog'),
    (12, 2, 'Drinks', 'FaCocktail'),

    -- Facilities for Deluxe Room
    (13, 3, 'Wifi', 'FaWifi'),
    (14, 3, 'Coffee', 'FaCoffee'),
    (15, 3, 'Bath', 'FaBath'),
    (16, 3, 'Parking Space', 'FaParking'),
    (17, 3, 'Breakfast', 'FaHotdog'),
    (18, 3, 'Drinks', 'FaCocktail'),

    -- Facilities for Budget Single Room
    (19, 4, 'Wifi', 'FaWifi'),
    (20, 4, 'Coffee', 'FaCoffee'),
    (21, 4, 'Bath', 'FaBath'),
    (22, 4, 'Parking Space', 'FaParking'),
    (23, 4, 'Breakfast', 'FaHotdog'),
    (24, 4, 'Drinks', 'FaCocktail');
