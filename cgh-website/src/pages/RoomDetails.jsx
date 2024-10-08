import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AdultsDropdown, CheckIn, CheckOut, KidsDropdown, ScrollToTop } from '../components';
import { hotelRules } from '../constants/data';
import { FaCheck } from 'react-icons/fa';
import { FaWifi, FaCoffee, FaBath, FaParking, FaHotdog, FaCocktail } from 'react-icons/fa';
import { useRoomContext } from '../context/RoomContext';
import { roomAmenities } from "../services/roomFacilitiesService.js";

const RoomDetails = () => {
  const { id } = useParams();
  const { rooms, handleCheck } = useRoomContext();
  const [room, setRoom] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const roomResponse = await fetch(`http://localhost:8080/rooms/getById/${id}`);
        if (!roomResponse.ok) throw new Error('Failed to fetch room data');
        const roomData = await roomResponse.json();
        setRoom(roomData);

        // Get facilities data for the room
        const roomFacility = roomAmenities.find((item) => item.roomId === parseInt(id)); // Find the room facility by roomId
        if (roomFacility) {
          setFacilities(roomFacility.facilities); // Set the facilities data
        }
      } catch (error) {
        console.error('Error fetching room or facilities data:', error);
      }
    };

    fetchRoomData();
  }, [id, navigate]);

  const handleBooking = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      alert('You need to log in to book this room.');
      return;
    }

    if (!room) return;

    // If accessToken exists, print to the console
    console.log('Booking API hit with access token.');

    // You can add additional booking logic here if needed
  };

  if (showLogin) {
    return (
        <Login onClose={() => setShowLogin(false)} /> // Render your login modal component
    );
  }

  if (!room) return <div>Loading...</div>;

  const { name, description, price, image } = room;

  const iconMapping = {
    Wifi: <FaWifi />,
    Coffee: <FaCoffee />,
    Bath: <FaBath />,
    'Parking Space': <FaParking />,
    Breakfast: <FaHotdog />,
    Drinks: <FaCocktail />,
  };

  return (
      <section>
        <ScrollToTop />
        <div className='bg-room h-[560px] relative flex justify-center items-center bg-cover bg-center'>
          <div className='absolute w-full h-full bg-black/70' />
          <h1 className='text-6xl text-white z-20 font-primary text-center'>{name}</h1>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full py-24'>
            {/* ⬅️⬅️⬅️ left side ⬅️⬅️⬅️ */}
            <div className='w-full lg:w-[60%] h-full text-justify'>
              <h2 className='h2'>{name}</h2>
              <p className='mb-8'>{description}</p>
              <img className='mb-8' src={`data:image/jpeg;base64,${image}`} alt="roomImg" />
              <div className='mt-12'>
                <h3 className='h3 mb-3'>Amenities:</h3>
                {/* icons grid */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                  {facilities.map((item) => (
                      <div key={item.name} className='flex items-center gap-x-3 flex-1'>
                        <div className='text-3xl text-accent'>
                          {iconMapping[item.name]} {/* Use 'name' to get the corresponding icon */}
                        </div>
                        <div className='text-base'>{item.name}</div> {/* Display facility name */}
                      </div>
                  ))}
                </div>
              </div>
            </div>
            {/* ➡️➡️➡️ right side ➡️➡️➡️ */}
            <div className='w-full lg:w-[40%] h-full'>
              {/* reservation */}
              <div className='py-8 px-6 bg-accent/20 mb-12'>
                <div className='flex flex-col space-y-4 mb-4'>
                  <h3>Your Reservation</h3>
                  <div className='h-[60px]'> <CheckIn value={checkInDate} onChange={setCheckInDate} /> </div>
                  <div className='h-[60px]'> <CheckOut value={checkOutDate} onChange={setCheckOutDate} /> </div>
                  <div className='h-[60px]'> <AdultsDropdown /> </div>
                  <div className='h-[60px]'> <KidsDropdown /> </div>
                </div>
                <button className='btn btn-lg btn-primary w-full' onClick={handleBooking}>
                  Book now for ${price}
                </button>
              </div>
              <div>
                <h3 className='h3'>Hotel Rules</h3>
                <p className='mb-6 text-justify'>
                  Hotel rules are guidelines set by a hotel to ensure a safe, comfortable, and enjoyable stay for all guests. They typically cover check-in/check-out times, smoking policies, noise levels, guest conduct, and the use of hotel facilities. These rules aim to maintain order, protect property, and enhance the overall guest experience.
                </p>
                <ul className='flex flex-col gap-y-4'>
                  {hotelRules.map(({ rules }, idx) => (
                      <li key={idx} className='flex items-center gap-x-4'>
                        <FaCheck className='text-accent' />
                        {rules}
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default RoomDetails;
