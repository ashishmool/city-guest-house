-- Inserting Attractions Data
INSERT INTO nearby_attractions (id, name, description, location, contact, website, image)
VALUES
    -- Daily Grind
    (1, 'Daily Grind',
     'Daily Grind Coffee is in a great location on Durbar Square, with a lovely terrace. We serve coffee to choose from when you miss home or want to escape if you want to learn more about Nepalese coffee. The coffee is, of course, outstanding, as are the pastries and small plates. A good place to take a break from Nepalese life and catch your breath before returning to it.' ||
     '\n' ||
     'Proudly serving 100% Nepali organic coffee .We are promoting Nepalese Coffee barns.',
     'Durbar Square, Bhaktapur',
     '(+977) 1 6615566',
     'https://www.gobhaktapur.com/listing/daily-grind/',
     'daily-grind.jpg'),

    -- Typical Handloom Weavers
    (2, 'Typical Handloom Weavers',
     'Typical Handloom Weavers is a traditional weaving industry for over 30 years in the ancient city of Bhaktapur. Located admist the center of the historic city, Typical Handloom Weavers (THW) focuses on producing quality textiles among the many mainly cotton.',
     'Sukuldhoka Street, Golmadhi -7, Bhaktapur',
     '(+977) 9847878786',
     'https://youtu.be/96IZtlraC54?si=Tc8bnB1iJMdX1feR',
     'handloom.jpg'),

    -- Club Bagmati Pvt. Ltd
    (3, 'Club Bagmati Pvt. Ltd',
     'Club Bagmati is a full dose of entertainment where you can enjoy swimming with foods in restaurant.An amazing getaway, a short drive from the busy streets of Kathmandu, into a serene space to immerse yourself in tranquility.',
     'Sipadole, Bhaktapur',
     '(+977) 9813943777',
     'https://www.gobhaktapur.com/listing/club-bagmati-bhaktapur/',
     'clubbagmati.jpg');
