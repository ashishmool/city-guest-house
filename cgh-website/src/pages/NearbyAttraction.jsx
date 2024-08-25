import React, { useEffect, useState } from 'react';
import { ScrollToTop } from '../components';
import { fetchAttractions } from '../services/nearbyAttraction'; // Adjust the path as needed

const NearbyAttraction = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAttractions = async () => {
            try {
                const data = await fetchAttractions();
                setAttractions(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getAttractions();
    }, []);

    return (
        <section>
            <ScrollToTop />

            {/* Header Section */}
            <div className='bg-nearbyattractions h-[560px] relative flex justify-center items-center bg-cover bg-center'>
                <div className='absolute w-full h-full bg-black/70' />
                <h1 className='text-6xl text-white z-20 font-primary text-center'>Nearby Attractions</h1>
            </div>

            {/* Content Section */}
            <div className='container mx-auto py-24'>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {attractions.map((attraction, idx) => (
                            <div key={attraction.id} className={`flex flex-col lg:flex-row ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:gap-x-8 h-full mb-16`}>
                                {/* Image */}
                                <div className='w-full lg:w-[50%] h-[300px] mb-6 lg:mb-0'>
                                    <img
                                        src={`data:image/jpeg;base64,${attraction.image}`}
                                        alt={attraction.name}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

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
                )}
            </div>

            {/* Error Section */}
            {error && (
                <div className='container mx-auto py-4'>
                    <p className='text-red-500 text-center'>Error fetching attractions: {error.message}</p>
                </div>
            )}
        </section>
    );
};

export default NearbyAttraction;
