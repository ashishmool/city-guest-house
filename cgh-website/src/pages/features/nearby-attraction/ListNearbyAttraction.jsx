import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAttractions, deleteAttractionById } from '../../../services/nearbyAttraction';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
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
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

const AddButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #c33318;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #73260e;
  }

  svg {
    margin-left: 8px;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  position: relative;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 24px;
  }

  span {
    margin-top: 8px;
    font-size: 12px;
    color: #333;
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const ListNearbyAttraction = () => {
    const [attractions, setAttractions] = useState([]);
    const { fetchCounts } = useOutletContext(); // Access fetchCounts function

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAttractions();
                setAttractions(data);
            } catch (error) {
                toast.error('Failed to fetch attractions');
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteAttractionById(id);
            setAttractions(attractions.filter(attraction => attraction.id !== id));
            toast.success('Attraction deleted successfully!');
            fetchCounts(); // Refetch counts in dashboard
        } catch (error) {
            toast.error('Failed to delete attraction');
        }
    };

    return (
        <Container>
            <h1><center><strong>Nearby Attractions</strong></center></h1>
            <AddButton to="/dashboard/attractions/add">
                Add New Attraction <FaPlus />
            </AddButton>
            <AttractionList>
                {attractions.map(attraction => {
                    const imageSrc = attraction.image ? `data:image/jpeg;base64,${attraction.image}` : null;
                    return (
                        <AttractionItem key={attraction.id}>
                            <ImageContainer>
                                {imageSrc && (
                                    <Image src={imageSrc} alt={attraction.name} />
                                )}
                            </ImageContainer>
                            <div style={{ flex: 1 }}>
                                <h3>{attraction.name}</h3>
                                <p>{attraction.description}</p>
                            </div>
                            <ActionContainer>
                                <Link to={`/dashboard/attractions/update/${attraction.id}`}>
                                    <ActionButton>
                                        <FaEdit />
                                        <span>Edit</span>
                                    </ActionButton>
                                </Link>
                                <ActionButton onClick={() => handleDelete(attraction.id)}>
                                    <FaTrash />
                                    <span>Delete</span>
                                </ActionButton>
                            </ActionContainer>
                        </AttractionItem>
                    );
                })}
            </AttractionList>
        </Container>
    );
};

export default ListNearbyAttraction;
