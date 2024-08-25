-- Insert Categories with specific IDs
INSERT INTO categories (id, name) VALUES
                                      (1, 'Appetizers'),
                                      (2, 'Main Courses'),
                                      (3, 'Desserts'),
                                      (4, 'Beverages');

-- Insert Items into Appetizers
INSERT INTO menu_items (id, name, description, price, category_id) VALUES
    (1001, 'French Fries', 'Crispy golden fries served with ketchup.', 4.99, 1);

-- Insert Items into Main Courses
INSERT INTO menu_items (id, name, description, price, category_id) VALUES
                                                                  (1002, 'Dumplings', 'Steamed dumplings filled with a savory mix of meat and vegetables.', 7.99, 2),
                                                                  (1003, 'Rice Sabji (Neaali-Style)', 'A flavorful rice dish served with a spicy vegetable curry.', 8.99, 2);

-- Insert Items into Desserts
INSERT INTO menu_items (id, name, description, price, category_id) VALUES
                                                                  (1004, 'Cheese Cake', 'A rich and creamy cheesecake topped with a berry compote.', 5.99, 3),
                                                                  (1005, 'Apple Pie', 'A classic apple pie with a flaky crust and cinnamon-spiced filling.', 4.99, 3);

-- Insert Items into Beverages
INSERT INTO menu_items (id, name, description, price, category_id) VALUES
                                                                  (1006, 'Bottled Water', 'Pure and refreshing bottled water.', 1.99, 4),
                                                                  (1007, 'Barasinghe Beer (330ml)', 'A crisp and refreshing beer in a 330ml bottle.', 3.99, 4);
