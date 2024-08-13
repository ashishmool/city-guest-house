import { AdultsDropdown, CheckIn, CheckOut, KidsDropdown, ScrollToTop } from '../components';
import { useRoomContext } from '../context/RoomContext';
import { hotelRules } from '../constants/data';
import { useParams } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';


const RoomDetails = () => {

  const { id } = useParams(); // id get form url (/room/:id) as string...
  const { rooms } = useRoomContext();

  const room = rooms.find(room => room.id === +id);

  // for (const key in room) {
  //   console.log(key);
  // }

  const { name, description, facilities, price, imageLg } = room ?? {};

  return (
    <section>

      <ScrollToTop />

      <div className='bg-room h-[560px] relative flex justify-center items-center bg-cover bg-center'>
        <div className='absolute w-full h-full bg-black/70' />
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{name}...</h1>
      </div>


      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full py-24'>

          {/* ⬅️⬅️⬅️ left side ⬅️⬅️⬅️ */}
          <div className='w-full lg:w-[60%] h-full text-justify'>

            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt="roomImg" />

            <div className='mt-12'>
              <h3 className='h3 mb-3'></h3>
              <p className='mb-12'> Amenities: </p>

              {/* icons grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {
                  facilities.map((item, index) =>
                    <div key={index} className='flex items-center gap-x-3 flex-1'>
                      <div className='text-3xl text-accent'>{<item.icon />}</div>
                      <div className='text-base'>{item.name}</div>
                    </div>
                  )
                }
              </div>
            </div>

          </div>


          {/* ➡️➡️➡️ right side ➡️➡️➡️ */}
          <div className='w-full lg:w-[40%] h-full'>

            {/* reservation */}
            <div className='py-8 px-6 bg-accent/20 mb-12'>

              <div className='flex flex-col space-y-4 mb-4'>
                <h3>Your Reservation</h3>
                <div className='h-[60px]'> <CheckIn /> </div>
                <div className='h-[60px]'> <CheckOut /> </div>
                <div className='h-[60px]'> <AdultsDropdown /> </div>
                <div className='h-[60px]'> <KidsDropdown /> </div>
              </div>

              <button className='btn btn-lg btn-primary w-full'>
                book now for ${price}
              </button>
            </div>

            <div>
              <h3 className='h3'>Hotel Rules</h3>
              <p className='mb-6 text-justify'>
                Hotel rules are guidelines set by a hotel to ensure a safe, comfortable, and enjoyable stay for all guests. They typically cover check-in/check-out times, smoking policies, noise levels, guest conduct, and the use of hotel facilities. These rules aim to maintain order, protect property, and enhance the overall guest experience.
              </p>

              <ul className='flex flex-col gap-y-4'>
                {
                  hotelRules.map(({ rules }, idx) =>
                    <li key={idx} className='flex items-center gap-x-4'>
                      <FaCheck className='text-accent' />
                      {rules}
                    </li>
                  )
                }
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default RoomDetails;
