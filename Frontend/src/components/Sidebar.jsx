import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#2c3e50', // Darker blue from example
    color: 'white',
    padding: '20px',
    height: '100vh', // Full height
    position: 'fixed', // Stays in place
    top: 0,
    left: 0,
    boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    overflowY: 'auto', // Scroll if content is long
  };

  const navItemStyle = {
    padding: '12px 15px',
    margin: '8px 0',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
  };

  const navItemHoverStyle = {
    backgroundColor: '#34495e', // Lighter blue on hover
  };

  // State to handle hover effects (simple demo)
  const [hoveredItem, setHoveredItem] = React.useState(null);

  return (
    <div style={sidebarStyle}>
      <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#ecf0f1' }}>
        BASELINE PMO
      </h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li
            style={{ ...navItemStyle, ...(hoveredItem === 'dashboard' ? navItemHoverStyle : {}) }}
            onMouseEnter={() => setHoveredItem('dashboard')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to="/" style={linkStyle}>
              🏠 Dashboard
            </Link>
          </li>
          {/* Add more navigation items as needed, e.g., Profile, Resource Manager */}
          <li
            style={{ ...navItemStyle, ...(hoveredItem === 'task_management' ? navItemHoverStyle : {}) }}
            onMouseEnter={() => setHoveredItem('task_management')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link to="/tasks" style={linkStyle}>
              ✅ Task Management (Basic)
            </Link>
          </li>
          {/* Example dropdown (simplified) */}
          <li style={{ ...navItemStyle, ...(hoveredItem === 'reporting' ? navItemHoverStyle : {}) }}
            onMouseEnter={() => setHoveredItem('reporting')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Reporting ▼
          </li>
          <li style={{ ...navItemStyle, paddingLeft: '30px', fontSize: '0.9em' }}>
            <Link to="/reports/summary" style={linkStyle}>
              - Summary
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;