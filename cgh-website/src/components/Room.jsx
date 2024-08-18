import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useState } from 'react';

const Room = ({ room }) => {
    const { id, name, image, size, maxPerson, description, price } = room ?? {};
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [loading, setLoading] = useState(false);

    const handleBookNowClick = () => {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
            alert('You need to log in to book this room.');
            return;
        }

        // If logged in, proceed with booking
        setLoading(true);
        navigate(`/room/${id}`); // Navigate to the room details page
    };

    return (
        <div className='bg-white shadow-2xl min-h-[500px] group'>
            <div className='overflow-hidden'>
                <img
                    src={`data:image/jpeg;base64,${image}`} // Adjusted to handle Base64 image
                    alt={name}  // Use the room name as the alt text for better accessibility
                    className='group-hover:scale-110 transition-all duration-300 w-full'
                />
            </div>

            <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
                <div className='flex justify-between w-[80%]'>
                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsArrowsFullscreen className='text-[15px]' />
                        </div>
                        <div className='flex gap-x-1'>
                            <div>Size</div>
                            <div>{size}m²</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <div className='text-accent'>
                            <BsPeople className='text-[18px]' />
                        </div>
                        <div className='flex gap-x-1'>
                            <div>Max people</div>
                            <div>{maxPerson}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* name and description */}
            <div className='text-center'>
                <h3 className="h3">{name}</h3>
                <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>
                    {description.slice(0, 56)}..
                </p>
            </div>

            {/* button */}
            <button
                onClick={handleBookNowClick}
                className="btn btn-secondary btn-sm max-w-[240px] mx-auto duration-300"
            >
                {loading ? 'Processing...' : `Book now from $${price}`}
            </button>
        </div>
    );
};

export default Room;
