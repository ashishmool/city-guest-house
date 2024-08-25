-- Insert the first record with a specified ID
INSERT INTO nearby_attractions (id, name, description, location, contact, website, image)
VALUES (
           1001,  -- Specify the ID manually
           'Daily Grind',
           'Daily Grind Coffee is in a great location on Durbar Square, with a lovely terrace. We serve coffee to choose from when you miss home or want to escape if you want to learn more about Nepalese coffee. The coffee is, of course, outstanding, as are the pastries and small plates. A good place to take a break from Nepalese life and catch your breath before returning to it.',
           'Durbar Square, Bhaktapur',
           '+977 1 6615566',
           'https://www.gobhaktapur.com/listing/club-bagmati-bhaktapur/',
           'daily-grind.jpg'
       );

-- Insert the second record with the next specified ID
INSERT INTO nearby_attractions (id, name, description, location, contact, website, image)
VALUES (
           1002,  -- Specify the ID manually
           'Typical Handloom Weavers',
           'Typical Handloom Weavers is a traditional weaving industry for over 30 years in the ancient city of Bhaktapur. Located amidst the center of the historic city, Typical Handloom Weavers (THW) focuses on producing quality textiles among the many mainly cotton.',
           'Bhaktapur, Nepal',
           '+977 9813943777',
           'https://youtu.be/96IZtlraC54?si=1zswCc2Hs89wBnxD',
           'handloom.jpg'
       );
