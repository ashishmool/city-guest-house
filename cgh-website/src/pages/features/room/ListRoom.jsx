import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllRooms, deleteRoomById } from '../../../services/roomService';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const RoomList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RoomItem = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 20px;
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

// ListRoom Component
const ListRoom = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await getAllRooms();
                setRooms(data);
            } catch (error) {
                toast.error('Failed to fetch rooms');
            }
        };
        fetchRooms();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteRoomById(id);
            setRooms(rooms.filter(room => room.id !== id));
            toast.success('Room deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete room');
        }
    };

    return (
        <Container>
            <h1><center><strong>Room List</strong></center></h1>
            <AddButton to="/dashboard/rooms/add">
                Add New Room <FaPlus />
            </AddButton>
            <RoomList>
                {rooms.map(room => (
                    <RoomItem key={room.id}>
                        <ImageContainer>
                            {/* Add room image handling if necessary */}
                        </ImageContainer>
                        <div style={{ flex: 1 }}>
                            <h3>{room.name}</h3>
                            <p>Price: ${room.price}</p>
                            <p>Capacity: {room.capacity}</p>
                            <p>{room.description}</p>
                        </div>
                        <ActionContainer>
                            <Link to={`/dashboard/rooms/edit/${room.id}`}>
                                <ActionButton>
                                    <FaEdit />
                                    <span>Edit</span>
                                </ActionButton>
                            </Link>
                            <ActionButton onClick={() => handleDelete(room.id)}>
                                <FaTrash />
                                <span>Delete</span>
                            </ActionButton>
                        </ActionContainer>
                    </RoomItem>
                ))}
            </RoomList>
        </Container>
    );
};

export default ListRoom;
