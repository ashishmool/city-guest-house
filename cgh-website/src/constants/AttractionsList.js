// src/components/AttractionsList.js
import React, { useEffect, useState } from 'react';
import { fetchAttractions } from '../services/nearbyAttraction';

const AttractionsList = () => {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAttractions = async () => {
            try {
                const data = await fetchAttractions();
                setAttractions(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        getAttractions();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching attractions: {error.message}</p>;

    return (
        <div>
            {attractions.map(attraction => (
                <div key={attraction.id}>
                    <h2>{attraction.name}</h2>
                    <p>{attraction.description}</p>
                    <p>Location: {attraction.location}</p>
                    <p>Contact: {attraction.contact}</p>
                    <a href={attraction.website} target="_blank" rel="noopener noreferrer">Website</a>
                    <img src={attraction.image} alt={attraction.name} />
                </div>
            ))}
        </div>
    );
};

export default AttractionsList;
