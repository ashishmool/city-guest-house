import React, { useEffect, useState } from 'react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { getAllRooms } from '../services/roomService';
import { fetchAttractions } from '../services/nearbyAttraction';
import { getAllMenus } from '../services/restaurantService'; // Import the menu service


const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f9fafc;
  flex-grow: 1;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #333;
  }
`;

const Breadcrumb = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;

  a {
    text-decoration: none;
    color: #2563eb;
    margin-right: 10px;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin-right: 10px;
    color: #999;
  }
`;

const WidgetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Widget = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Dashboard = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(part => part);

    const [roomCount, setRoomCount] = useState(0);
    const [attractionCount, setAttractionCount] = useState(0);
    const [menuCount, setMenuCount] = useState(0); // New state for menu count

    const fetchCounts = async () => {
        try {
            const rooms = await getAllRooms();
            setRoomCount(rooms.length);

            const attractions = await fetchAttractions();
            setAttractionCount(attractions.length);

            const menus = await getAllMenus(); // Fetch menu items
            setMenuCount(menus.length); // Set menu count
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        if (role !== 'Admin') {
            navigate('/unauthorized');
        }
    }, [role, navigate]);

    useEffect(() => {
        fetchCounts();
    }, []);

    const capitalizeWords = (str) => {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const breadcrumbLinks = [
        { path: '/', label: 'Home' },
        { path: '/dashboard', label: 'Dashboard' },
        ...(pathParts.length > 1
            ? [{ path: `/${pathParts.join('/')}`, label: capitalizeWords(pathParts.slice(-1)[0].replace(/-/g, ' ')) }]
            : [])
    ];

    return (
        <LayoutContainer>
            <Sidebar />
            <DashboardContainer>
                <Breadcrumb>
                    {breadcrumbLinks.map((link, index) => (
                        <React.Fragment key={link.path}>
                            <Link to={link.path}>{link.label}</Link>
                            {index < breadcrumbLinks.length - 1 && <span>&gt;</span>}
                        </React.Fragment>
                    ))}
                </Breadcrumb>
                <Header>
                    <h1>Welcome, Admin 👋</h1>
                </Header>
                <WidgetsContainer>
                    <Widget>
                        <h3>Rooms</h3>
                        <span>{roomCount}</span>
                    </Widget>
                    <Widget>
                        <h3>Nearby Attractions</h3>
                        <span>{attractionCount}</span>
                    </Widget>
                    <Widget>
                        <h3>Menu Items</h3> {/* Updated title */}
                        <span>{menuCount}</span> {/* Dynamic count */}
                    </Widget>
                    <Widget>
                        <h3>Bug Reports</h3>
                        <span>234</span>
                    </Widget>
                </WidgetsContainer>


                <Outlet context={{ fetchCounts }} /> {/* Pass fetchCounts to child components */}
            </DashboardContainer>
        </LayoutContainer>
    );
};

export default Dashboard;
