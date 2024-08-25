import React, { useEffect, useState } from 'react';
import { getAllFacilities, deleteFacilityById } from '../../../services/facilityService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: ${(props) => (props.delete ? '#ff4d4d' : '#007bff')};
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.delete ? '#ff1a1a' : '#0056b3')};
  }
`;


const AddButton = styled(Button)`
  background-color: #28a745;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #218838;
  }
`;

const ListFacility = () => {
    const [facilities, setFacilities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFacilities = async () => {
            try {
                const data = await getAllFacilities();
                console.log (data);
                setFacilities(data);
            } catch (error) {
                toast.error('Failed to fetch facilities');
            }
        };
        fetchFacilities();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this facility?')) {
            try {
                await deleteFacilityById(id);
                toast.success('Facility deleted successfully');
                setFacilities(facilities.filter((facility) => facility.id !== id));
            } catch (error) {
                toast.error('Failed to delete facility');
            }
        }
    };

    const handleUpdate = (id) => {
        navigate(`/dashboard/update-facility/${id}`);
    };

    const handleAdd = () => {
        navigate('/dashboard/room-facilities/add');
    };

    return (
        <Container>
            <h2>List of Facilities</h2>
            <AddButton onClick={handleAdd}>Add New Facility</AddButton>
            <Table>
                <thead>
                <tr>
                    <Th>Name</Th>
                    <Th>Description</Th>
                    <Th>Room ID</Th>
                    <Th>Actions</Th>
                </tr>
                </thead>
                <tbody>
                {facilities.map((facility) => (
                    <tr key={facility.id}>
                        <Td>{facility.name}</Td>
                        <Td>{facility.description}</Td>
                        <Td>{facility.roomId || 'N/A'}</Td> {/* Access roomId from the room object */}
                        <Td>
                            <Button onClick={() => handleUpdate(facility.id)}>Edit</Button>
                            <Button delete={true} onClick={() => handleDelete(facility.id)}>Delete</Button>
                        </Td>
                    </tr>
                ))}


                </tbody>
            </Table>
        </Container>
    );
};

export default ListFacility;
