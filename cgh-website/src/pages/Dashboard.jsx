// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import DashboardLayout from './features/dashboard/DashboardLayout.jsx';
// import DashboardFilter from './features/dashboard/DashboardFilter';
// import Heading from '../ui/Heading';
// import Row from '../ui/Row';
// import styled from 'styled-components';
//
// // Optional: Define a styled container for additional styling
// const DashboardContainer = styled.div`
//   padding: 20px;
//   background: ${({ theme }) => theme.background}; // Use theme background color
//   color: ${({ theme }) => theme.textColor}; // Use theme text color
// `;
//
// function Dashboard() {
//     const navigate = useNavigate();
//     const role = localStorage.getItem('role'); // Fetch role directly from localStorage
//
//     React.useEffect(() => {
//         if (role !== 'Admin') {
//             navigate('/unauthorized'); // Redirect to an unauthorized page or login page
//         }
//     }, [role, navigate]);
//
//     if (role !== 'Admin') {
//         return null; // Or show a loading indicator or message while redirecting
//     }
//
//     return (
//         <DashboardContainer>
//             <Row type="horizontal">
//                 <Heading as="h1">Dashboard</Heading>
//                 <DashboardFilter />
//             </Row>
//             <DashboardLayout />
//         </DashboardContainer>
//     );
// }
//
// export default Dashboard;
