-- Insert Categories with specific IDs
INSERT INTO categories (id, name) VALUES
                                      (1, 'Appetizers'),
                                      (2, 'Main Courses'),
                                      (3, 'Desserts'),
                                      (4, 'Beverages');

-- Insert Menu Items with specific IDs and category references
INSERT INTO menu_items (id, name, description, price, category_id) VALUES
                                                                       (1, 'French Fries', 'Crispy and golden French fries served with a side of ketchup.', '$4', 1),
                                                                       (2, 'Mustang Aalo', 'Spicy fried potatoes, a popular snack from Mustang.', '$5', 1),
                                                                       (3, 'Dumplings', 'Steamed or fried dumplings filled with savory ingredients.', '$5', 1),
                                                                       (4, 'Nepali-Style Set Meal', 'A traditional Nepali meal with rice, lentils, vegetables, and pickles.', '$9', 2),
                                                                       (5, 'Any Style Noodles Meal', 'Noodles prepared in your preferred style, served with vegetables or meat.', '$10', 2),
                                                                       (6, 'Apple Pie', 'Classic apple pie with a buttery crust and cinnamon filling.', '$3', 3),
                                                                       (7, 'Cheese Cake', 'Rich and creamy cheesecake with a graham cracker crust.', '$4', 3),
                                                                       (8, 'Barasinghe Beer', 'A smooth beer, perfect with any meal • Serving Size: (750ml)', '$7', 4),
                                                                       (9, 'Sparkling Water', 'Refreshing sparkling water served with a slice of lemon.', '$4', 4);
