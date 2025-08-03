import React from 'react';
import Sidebar from '../components/Sidebar';

function DashboardLayout({ children }) {
  const layoutStyle = {
    display: 'flex',
    minHeight: '100vh',
  };

  const contentAreaStyle = {
    marginLeft: '250px', // Matches sidebar width
    flexGrow: 1, // Takes up remaining space
    padding: '20px',
    backgroundColor: '#f4f6f9', // Light background
  };

  const topBarDummyStyle = {
    backgroundColor: '#fff',
    padding: '15px 20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div style={layoutStyle}>
      <Sidebar />
      <div style={contentAreaStyle}>
        {/* Top Bar - Simplified from example */}
        <div style={topBarDummyStyle}>
          <div style={{fontWeight: 'bold', fontSize: '1.1em'}}>Dashboard</div>
          <div>Welcome, PMOSponsor</div>
        </div>
        {children} {/* This is where your page content will be rendered */}
      </div>
    </div>
  );
}

export default DashboardLayout;