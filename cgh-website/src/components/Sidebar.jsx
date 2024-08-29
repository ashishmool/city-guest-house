// Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {FaUser, FaBed, FaBuilding, FaChartLine, FaSignOutAlt, FaCoffee} from 'react-icons/fa';
import {FaBowlFood} from "react-icons/fa6";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f4f5fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0; /* Prevents shrinking */
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;

  &:hover {
    background-color: #e6e7ee;
    border-radius: 10px;
  }

  svg {
    margin-right: 15px;
  }
`;

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e7ee;
  padding: 20px;
  border-radius: 10px;
`;

const LogoutLink = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #e6e7ee;
    border-radius: 10px;
  }

  svg {
    margin-right: 15px;
  }
`;

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear local storage to destroy session
        localStorage.clear();
        // Redirect to login page
        navigate('/');
    };

    return (
        <SidebarContainer>
            <div>
                <SidebarLink to="/dashboard">
                    <FaChartLine /> Dashboard
                </SidebarLink>
                <SidebarLink to="/dashboard/list-rooms">
                    <FaBed /> Rooms
                </SidebarLink>
                <SidebarLink to="/dashboard/list-facilities">
                    <FaCoffee /> Hotel Facilities
                </SidebarLink>
                <SidebarLink to="/dashboard/list-restaurants">
                    <FaBowlFood /> Menu
                </SidebarLink>
                <SidebarLink to="/dashboard/list-attractions">
                    <FaBuilding /> Nearby Attractions
                </SidebarLink>
                {/*<SidebarLink to="/user">*/}
                {/*    <FaUser /> System Users*/}
                {/*</SidebarLink>*/}
            </div>
            <SidebarFooter>
                <LogoutLink onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                </LogoutLink>
                <p>© City Guest House</p>
            </SidebarFooter>
        </SidebarContainer>
    );
};

export default Sidebar;