import { BookForm, HeroSlider, Rooms, ScrollToTop } from '../components';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <HeroSlider />
            <div className='container mx-auto relative'>
                <div className='bg-accent/20 mt-4 p-4 lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:-top-12 lg:z-30 lg:shadow-xl'>
                    <BookForm />
                </div>
            </div>
            <Rooms />

            {/* This will render any nested route components (like Login) */}
            <Outlet />
        </div>
    );
};

export default Home;
