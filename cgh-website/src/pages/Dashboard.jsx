import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar'; // Import Sidebar component

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f9fafc;
  flex-grow: 1;
  overflow-y: auto; // Allow scrolling for the dashboard content
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

function Dashboard() {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');

    useEffect(() => {
        if (role !== 'Admin') {
            navigate('/unauthorized');
        }
    }, [role, navigate]);

    if (role !== 'Admin') {
        return null;
    }

    return (
        <LayoutContainer>
            <Sidebar /> {/* Sidebar is included in the layout */}
            <DashboardContainer>
                <Breadcrumb>
                    <Link to="/">Home</Link>
                    <span>&gt;</span>
                    <Link to="/dashboard">Dashboard</Link>
                </Breadcrumb>
                <Header>
                    <h1>Welcome, Admin 👋</h1>
                </Header>
                <WidgetsContainer>
                    <Widget>
                        <h3>Weekly Sales</h3>
                        <span>714k</span>
                    </Widget>
                    <Widget>
                        <h3>New Users</h3>
                        <span>1.35m</span>
                    </Widget>
                    <Widget>
                        <h3>Item Orders</h3>
                        <span>1.72m</span>
                    </Widget>
                    <Widget>
                        <h3>Bug Reports</h3>
                        <span>234</span>
                    </Widget>
                </WidgetsContainer>
            </DashboardContainer>
        </LayoutContainer>
    );
}

export default Dashboard;
