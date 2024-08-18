import { useState } from 'react';
import { AdultsDropdown, CheckIn, CheckOut, KidsDropdown } from '.';
import { useRoomContext } from '../context/RoomContext';

const BookForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const { handleCheck } = useRoomContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInDate || !checkOutDate) {
      alert('Please select check-in and check-out dates.');
      return;
    }
    handleCheck({ checkInDate, checkOutDate });
  };

  return (
      <form className='h-[300px] lg:h-[70px] w-full' onSubmit={handleSubmit}>
        <div className='flex flex-col w-full h-full lg:flex-row'>
          <div className='flex-1 border-r'>
            <CheckIn value={checkInDate} onChange={setCheckInDate} />
          </div>
          <div className='flex-1 border-r'>
            <CheckOut value={checkOutDate} onChange={setCheckOutDate} />
          </div>
          <div className='flex-1 border-r'>
            <AdultsDropdown />
          </div>
          <div className='flex-1 border-r'>
            <KidsDropdown />
          </div>
          <button type='submit' className='btn btn-primary'>
            Check Now
          </button>
        </div>
      </form>
  );
};

export default BookForm;
