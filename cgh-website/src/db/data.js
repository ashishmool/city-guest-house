import { FaWifi, FaCoffee, FaBath, FaParking, FaHotdog,  FaCocktail } from 'react-icons/fa';
import images from '../assets';

export const roomData = [
  {
    id: 1,
    name: 'Room w/ Mini Balcony',
    description:
      'A cozy, simple room featuring a comfortable bed, minimalistic decor, and a mini balcony offering a breath of fresh air and a small outdoor space to relax. Perfect for enjoying a morning coffee or evening breeze.',
    facilities: [
      { name: 'Wifi', icon: FaWifi },
      { name: 'Coffee', icon: FaCoffee },
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 30,
    maxPerson: 3,
    price: 30,
    image: images.BalconyRoom,
    imageLg: images.BalconyRoom,
  },
  {
    id: 2,
    name: 'Street-View Room',
    description:
      'A comfortable, straightforward room with large windows offering a vibrant street view. Ideal for those who enjoy a glimpse of the city’s daily life from the comfort of their room.',
    facilities: [
      { name: 'Wifi', icon: FaWifi },
      { name: 'Coffee', icon: FaCoffee },
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 28,
    maxPerson: 2,
    price: 25,
    image: images.StreetRoom,
    imageLg: images.StreetRoom,
  },
  {
    id: 3,
    name: 'Deluxe Room',
    description:
      'A spacious and elegantly designed deluxe room with premium furnishings, a plush bed, and modern amenities. Perfect for a luxurious stay, offering enhanced comfort and style for a memorable experience.',
    facilities: [
      { name: 'Wifi', icon: FaWifi },
      { name: 'Coffee', icon: FaCoffee },
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 26,
    maxPerson: 2,
    price: 23,
    image: images.DeluxeRoom,
    imageLg: images.DeluxeRoom,
  },
  {
    id: 4,
    name: 'Budget Single Room',
    description:
      'A compact and practical room designed for the budget-conscious single traveler. It offers all the essentials, including a comfortable bed and basic amenities, ideal for a simple and affordable stay.',
    facilities: [
      { name: 'Wifi', icon: FaWifi },
      { name: 'Coffee', icon: FaCoffee },
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 14,
    maxPerson: 1,
    price: 18,
    image: images.BudgetRoom,
    imageLg: images.BudgetRoom,
  },

];
