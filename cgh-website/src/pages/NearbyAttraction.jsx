import { ScrollToTop } from '../components';
import { attractionsData } from '../constants/nearbyAttraction.js';

const NearbyAttraction = () => {
    return (
        <section>
            <ScrollToTop />

            {/* Header Section */}
            <div className='bg-view h-[560px] relative flex justify-center items-center bg-cover bg-center'>
                <div className='absolute w-full h-full bg-black/70' />
                <h1 className='text-6xl text-white z-20 font-primary text-center'>Nearby Attractions</h1>
            </div>

            {/* Content Section */}
            <div className='container mx-auto py-24'>
                {attractionsData.map((attraction, idx) => (
                    <div key={attraction.id} className={`flex flex-col lg:flex-row ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:gap-x-8 h-full mb-16`}>

                        {/* Image */}
                        <div className='w-full lg:w-[50%] h-[300px] bg-cover bg-center mb-6 lg:mb-0' style={{ backgroundImage: `url(${attraction.image})` }}></div>

                        {/* Details */}
                        <div className='w-full lg:w-[50%] h-full'>
                            <h3 className='text-3xl font-semibold mb-4'>{attraction.name}</h3>
                            <p className='text-base mb-4 text-justify'>{attraction.description}</p>
                            <p className='text-base mb-2'><strong>Location:</strong> {attraction.location}</p>
                            <p className='text-base mb-2'><strong>Contact:</strong> {attraction.contact}</p>
                            <p className='text-base mb-2'>
                                <strong>Website:</strong>
                                <a
                                    href={attraction.website}
                                    className='text-accent underline'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {attraction.website}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NearbyAttraction;
