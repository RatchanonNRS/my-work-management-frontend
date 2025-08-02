import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard'; // Import the new component

function ProjectsDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const { fetchAllProjects } = await import('../api/mockProjectsApi'); // Use the new API
        const data = await fetchAllProjects();
        setProjects(data);
      } catch (err) {
        setError(`Failed to load projects: ${err.message}`);
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const dashboardGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Responsive grid
    gap: '20px',
    padding: '20px 0',
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>Loading projects...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>Error: {error}</div>;
  if (projects.length === 0) return <div style={{ textAlign: 'center', padding: '50px', color: '#666', fontSize: '1.2em' }}>No projects found.</div>;

  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: '#333' }}>All Projects Overview</h1>
      <div style={dashboardGridStyle}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsDashboard;