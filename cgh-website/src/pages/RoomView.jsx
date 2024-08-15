import { ScrollToTop } from '../components';
import RoomsContent from '../components/Rooms.jsx';

const RoomView = () => {
    return (
        <section>
            <ScrollToTop />

            {/* Header Section */}
            <div className='bg-room h-[560px] relative flex justify-center items-center bg-cover bg-center'>
                <div className='absolute w-full h-full bg-black/70' />
                <h1 className='text-6xl text-white z-20 font-primary text-center'>Our Rooms</h1>
            </div>

            {/* Main Content */}
            <RoomsContent />  {/* The imported content component */}


        </section>
    );
};

export default RoomView;
