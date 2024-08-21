import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAttractions, deleteAttractionById } from '../../../services/nearbyAttraction';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const AttractionList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AttractionItem = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListNearbyAttraction = () => {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAttractions();
            setAttractions(data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteAttractionById(id);
        setAttractions(attractions.filter(attraction => attraction.id !== id));
    };

    return (
        <Container>
            <h1>Nearby Attractions</h1>
            <Link to="/dashboard/attractions/add">Add New Attraction</Link>
            <AttractionList>
                {attractions.map(attraction => (
                    <AttractionItem key={attraction.id}>
                        <div>
                            <h3>{attraction.name}</h3>
                            <p>{attraction.description}</p>
                        </div>
                        <div>
                            <Link to={`/dashboard/attractions/update/${attraction.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(attraction.id)}>Delete</button>
                        </div>
                    </AttractionItem>
                ))}
            </AttractionList>
        </Container>
    );
};

export default ListNearbyAttraction;
