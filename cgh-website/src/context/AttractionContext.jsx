import React, { createContext, useState, useEffect } from 'react';
import { fetchAttractions } from '../services/nearbyAttraction';

export const AttractionContext = createContext();

export const AttractionProvider = ({ children }) => {
    const [attractions, setAttractions] = useState([]);
    const [count, setCount] = useState(0);

    const fetchCounts = async () => {
        try {
            const data = await fetchAttractions();
            setAttractions(data);
            setCount(data.length);
        } catch (error) {
            console.error('Error fetching attraction counts:', error);
        }
    };

    useEffect(() => {
        fetchCounts();
    }, []);

    return (
        <AttractionContext.Provider value={{ attractions, count, fetchCounts }}>
            {children}
        </AttractionContext.Provider>
    );
};
