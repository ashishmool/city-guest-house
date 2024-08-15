
-- Inserting a system_user with Admin role
INSERT INTO system_users (user_id, first_name, last_name, role, email, password)
VALUES (0,'Ashish', 'Mool', 'Admin', 'cityguesthouse2014@gmail.com', '$2a$12$6Kp2ZUQhu3W1./FbuB1YbOCCzKexnmeUkAcxkJk6w.vZADb/eBaZ6');


-- Inserting a role for Admin
INSERT INTO roles (id, name) VALUES (1, 'Admin');
INSERT INTO roles (id, name) VALUES (2, 'Customer');

-- Mapping role for UserId as RoleId for Admin
INSERT INTO users_roles (user_id, role_id) VALUES (0, 1);


-- Inserting Email Credentials
INSERT INTO public.email_credentials (id, email, password, host, port, date, active, protocol)
VALUES (1,'cityguesthouse2014@gmail.com', 'vgcb bsze nknx evzf', 'smtp.gmail.com', '587','2024-01-19 16:04:32.000000', true, 'smtp');

-- Inserting Rooms Data
INSERT INTO rooms (id, name, description, size, max_person, price, image, image_lg)
VALUES
    (10001, 'Room w/ Mini Balcony',
     'A cozy, simple room featuring a comfortable bed, minimalistic decor, and a mini balcony offering a breath of fresh air and a small outdoor space to relax. Perfect for enjoying a morning coffee or evening breeze.',
     30, 3, 30, 'images/BalconyRoom.jpg', 'images/BalconyRoomLg.jpg'),

    (10002, 'Street-View Room',
     'A comfortable, straightforward room with large windows offering a vibrant street view. Ideal for those who enjoy a glimpse of the city’s daily life from the comfort of their room.',
     28, 2, 25, 'images/StreetRoom.jpg', 'images/StreetRoomLg.jpg'),

    (10003, 'Deluxe Room',
     'A spacious and elegantly designed deluxe room with premium furnishings, a plush bed, and modern amenities. Perfect for a luxurious stay, offering enhanced comfort and style for a memorable experience.',
     26, 2, 23, 'images/DeluxeRoom.jpg', 'images/DeluxeRoomLg.jpg'),

    (10004, 'Budget Single Room',
     'A compact and practical room designed for the budget-conscious single traveler. It offers all the essentials, including a comfortable bed and basic amenities, ideal for a simple and affordable stay.',
     14, 1, 18, 'images/BudgetRoom.jpg', 'images/BudgetRoomLg.jpg');

-- Inserting Room Facilities Data
INSERT INTO room_facilities (room_id, facility_name, facility_icon)
VALUES
    -- Room w/ Mini Balcony
    (10001, 'Wifi', 'FaWifi'),
    (10001, 'Coffee', 'FaCoffee'),
    (10001, 'Bath', 'FaBath'),
    (10001, 'Parking Space', 'FaParking'),
    (10001, 'Breakfast', 'FaHotdog'),
    (10001, 'Drinks', 'FaCocktail'),

    -- Street-View Room
    (10002, 'Wifi', 'FaWifi'),
    (10002, 'Coffee', 'FaCoffee'),
    (10002, 'Bath', 'FaBath'),
    (10002, 'Parking Space', 'FaParking'),
    (10002, 'Breakfast', 'FaHotdog'),
    (10002, 'Drinks', 'FaCocktail'),

    -- Deluxe Room
    (10003, 'Wifi', 'FaWifi'),
    (10003, 'Coffee', 'FaCoffee'),
    (10003, 'Bath', 'FaBath'),
    (10003, 'Parking Space', 'FaParking'),
    (10003, 'Breakfast', 'FaHotdog'),
    (10003, 'Drinks', 'FaCocktail'),

    -- Budget Single Room
    (10004, 'Wifi', 'FaWifi'),
    (10004, 'Coffee', 'FaCoffee'),
    (10004, 'Bath', 'FaBath'),
    (10004, 'Parking Space', 'FaParking'),
    (10004, 'Breakfast', 'FaHotdog'),
    (10004, 'Drinks', 'FaCocktail');

-- Inserting Attractions Data
INSERT INTO nearby_attractions (id, name, description, location, contact, website, image)
VALUES
    -- Daily Grind
    (1, 'Daily Grind',
     'Daily Grind Coffee is in a great location on Durbar Square, with a lovely terrace. We serve coffee to choose from when you miss home or want to escape if you want to learn more about Nepalese coffee. The coffee is, of course, outstanding, as are the pastries and small plates. A good place to take a break from Nepalese life and catch your breath before returning to it.\n' +
     '\n' +
     'Proudly serving 100% Nepali organic coffee .We are promoting Nepalese Coffee barns.',
     'Durbar Square, Bhaktapur',
     '(+977) 1 6615566',
     'https://www.gobhaktapur.com/listing/daily-grind/',
     'src/assets/img/daily-grind.jpg'),

    -- Typical Handloom Weavers
    (2, 'Typical Handloom Weavers',
     'Typical Handloom Weavers is a traditional weaving industry for over 30 years in the ancient city of Bhaktapur. Located admist the center of the historic city, Typical Handloom Weavers (THW) focuses on producing quality textiles among the many mainly cotton.',
     'Sukuldhoka Street, Golmadhi -7, Bhaktapur',
     '(+977) 9847878786',
     'https://youtu.be/96IZtlraC54?si=Tc8bnB1iJMdX1feR',
     'src/assets/img/handloom.jpg'),

    -- Club Bagmati Pvt. Ltd
    (3, 'Club Bagmati Pvt. Ltd',
     'Club Bagmati is a full dose of entertainment where you can enjoy swimming with foods in restaurant.An amazing getaway, a short drive from the busy streets of Kathmandu, into a serene space to immerse yourself in tranquility.',
     'Sipadole, Bhaktapur',
     '(+977) 9813943777',
     'https://www.gobhaktapur.com/listing/club-bagmati-bhaktapur/',
     'src/assets/img/clubbagmati.jpg');
