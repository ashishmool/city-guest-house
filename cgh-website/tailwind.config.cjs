module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#72260e',
        accent: {
          DEFAULT: '#c33318',
          hover: '#73260e',
        },
      },
      backgroundImage: {
        room: "url('/src/assets/img/room.jpg')",
        contact: "url('/src/assets/img/contact-us.jpg')",
        restaurant: "url('/src/assets/img/restaurant.jpg')",
        nearbyattractions: "url('/src/assets/img/attractions.jpg')",
      },
    },
  },
  plugins: [],
};
