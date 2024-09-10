// import React, { useEffect, useState } from 'react';
// import { getFacilityById, updateFacility } from '../../../services/facilityService';
// import { getAllRooms } from '../../../services/roomService';
// import { toast } from 'react-toastify';
// import { useNavigate, useParams } from 'react-router-dom';
// import styled from 'styled-components';
//
// const Container = styled.div`
//   padding: 20px;
// `;
//
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;
//
// const Input = styled.input`
//   margin-bottom: 15px;
//   padding: 10px;
//   font-size: 16px;
// `;
//
// const Textarea = styled.textarea`
//   margin-bottom: 15px;
//   padding: 10px;
//   font-size: 16px;
// `;
//
// const CheckboxContainer = styled.div`
//   margin-bottom: 15px;
// `;
//
// const Button = styled.button`
//   padding: 10px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;
//
//   &:hover {
//     background-color: #0056b3;
//   }
// `;
//
// const UpdateFacility = () => {
//     const { id } = useParams();
//     const [facilityData, setFacilityData] = useState({
//         name: '',
//         description: '',
//         roomId: ''
//     });
//     const [rooms, setRooms] = useState([]);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const fetchFacility = async () => {
//             try {
//                 const data = await getFacilityById(id);
//                 setFacilityData(data);
//             } catch (error) {
//                 toast.error('Failed to fetch facility details');
//             }
//         };
//
//         const fetchRooms = async () => {
//             try {
//                 const roomData = await getAllRooms();
//                 setRooms(roomData);
//             } catch (error) {
//                 toast.error('Failed to fetch rooms');
//             }
//         };
//
//         fetchFacility();
//         fetchRooms();
//     }, [id]);
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFacilityData({ ...facilityData, [name]: value });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await updateFacility(id, facilityData);
//             toast.success('Facility updated successfully');
//             navigate('/dashboard/list-facilities');
//         } catch (error) {
//             toast.error('Failed to update facility');
//         }
//     };
//
//     return (
//         <Container>
//             <h2>Update Facility</h2>
//             <Form onSubmit={handleSubmit}>
//                 <Input
//                     type="text"
//                     name="name"
//                     placeholder="Facility Name"
//                     value={facilityData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <Textarea
//                     name="description"
//                     placeholder="Description"
//                     value={facilityData.description}
//                     onChange={handleChange}
//                     required
//                 />
//                 <CheckboxContainer>
//                     <h4>Select Room:</h4>
//                     {rooms.map((room) => (
//                         <label key={room.id}>
//                             <input
//                                 type="radio"
//                                 name="roomId"
//                                 value={room.id}
//                                 checked={facilityData.roomId === room.id}
//                                 onChange={handleChange}
//                             />
//                             {room.name}
//                         </label>
//                     ))}
//                 </CheckboxContainer>
//                 <Button type="submit">Update Facility</Button>
//             </Form>
//         </Container>
//     );
// };
//
// export default UpdateFacility;
