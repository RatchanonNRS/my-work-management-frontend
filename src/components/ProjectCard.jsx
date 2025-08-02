import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const cardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '280px', // Ensure consistent height
  };

  const headerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px 15px',
    borderRadius: '5px',
    marginBottom: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.1em',
    color: '#333',
  };

  const sectionStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    fontSize: '0.85em',
    color: '#666',
    marginBottom: '5px',
    display: 'block',
  };

  const valueStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  // Simple "donut" chart placeholder
  const donutChartStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2em',
    margin: '0 auto 10px auto',
    background: `conic-gradient(#4CAF50 ${project.progress}%, #e0e0e0 ${project.progress}%)`,
    color: 'black', // Text color for percentage
    border: '2px solid #ddd',
  };

  // Simple bar chart placeholder
  const barContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '80px',
    marginTop: '10px',
    borderBottom: '1px solid #eee',
  };

  const barStyle = (height, color) => ({
    width: '30%',
    backgroundColor: color,
    height: `${height / project.plannedHours * 100 * 0.8}%`, // Scale height relative to plannedHours
    borderRadius: '3px 3px 0 0',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: 'white',
    fontSize: '0.7em',
    fontWeight: 'bold',
  });

  const riskLabelStyle = {
    fontSize: '0.9em',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3px',
  };

  const riskCircleStyle = (color) => ({
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '5px',
    display: 'inline-block',
  });

  return (
    <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={cardStyle}>
        <div style={headerStyle}>{project.name}</div>

        <div style={sectionStyle}>
          <span style={labelStyle}>Progress</span>
          <div style={donutChartStyle}>{project.progress}%</div>
        </div>

        <div style={sectionStyle}>
          <span style={labelStyle}>Hours</span>
          <div style={barContainerStyle}>
            <div style={barStyle(project.plannedHours, '#4CAF50')}>
              {project.plannedHours}
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', color: '#333', fontSize: '0.7em' }}>Planned</div>
            </div>
            <div style={barStyle(project.actualHours, '#FFC107')}>
              {project.actualHours}
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', color: '#333', fontSize: '0.7em' }}>Actual</div>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <span style={labelStyle}>Risks & Issues</span>
          <div>
            <span style={riskLabelStyle}><span style={riskCircleStyle('red')}></span> High: {project.risksHigh}</span>
            <span style={riskLabelStyle}><span style={riskCircleStyle('orange')}></span> Medium: {project.risksMedium}</span>
            <span style={riskLabelStyle}><span style={riskCircleStyle('green')}></span> Low: {project.risksLow}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;