import { FaCheck } from 'react-icons/fa';
import { ScrollToTop } from '../components';
import { menuCategories, menuItems, restaurantRules } from '../constants/restaurantData.js';

const Restaurant = () => {
    return (
        <section>
            <ScrollToTop />

            {/* Header Section */}
            <div className='bg-room h-[560px] relative flex justify-center items-center bg-cover bg-center'>
                <div className='absolute w-full h-full bg-black/70' />
                <h1 className='text-6xl text-white z-20 font-primary text-center'>Our Restaurant</h1>
            </div>

            {/* Content Section */}
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full py-24'>

                    {/* Left Side: Menu Details */}
                    <div className='w-full lg:w-[60%] h-full text-justify'>
                        <h2 className='h2'>Our Menu</h2>
                        <p className='mb-8'>
                            Explore our exquisite menu that caters to all tastes, from appetizers to desserts, and beverages that complement every meal.
                        </p>
                        {menuCategories.map((category) => (
                            <div key={category.name} className='mb-12'>
                                <h3 className='h3 mb-6'>{category.name}</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {menuItems
                                        .filter((item) => item.category === category.name)
                                        .map((item) => (
                                            <div key={item.id} className='flex items-start gap-x-4'>
                                                <div className='text-xl text-accent'>{item.name}</div>
                                                <div className='flex-1'>
                                                    <p className='text-base'>{item.description}</p>
                                                </div>
                                                <div className='text-base'>{item.price}</div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Restaurant Rules and Info */}
                    <div className='w-full lg:w-[40%] h-full'>

                        {/* Restaurant Info */}
                        <div className='py-8 px-6 bg-accent/20 mb-12'>
                            <h3>About Our Restaurant</h3>
                            <p className='mb-6 text-justify'>
                                Our restaurant offers a delightful culinary experience with a menu that combines local flavors with international cuisine. Whether you're here for a casual lunch or an elegant dinner, our selection of dishes and beverages ensures that every meal is memorable.
                            </p>
                            <button className='btn btn-lg btn-primary w-full'>
                                Reserve a Table
                            </button>
                        </div>

                        {/* Restaurant Rules */}
                        <div>
                            <h3 className='h3'>Restaurant Rules</h3>
                            <p className='mb-6 text-justify'>
                                To ensure a pleasant dining experience for all our guests, we kindly ask you to adhere to the following guidelines. These rules are designed to maintain a comfortable and respectful atmosphere for everyone.
                            </p>

                            <ul className='flex flex-col gap-y-4'>
                                {restaurantRules.map(({ rules }, idx) => (
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

export default Restaurant;
