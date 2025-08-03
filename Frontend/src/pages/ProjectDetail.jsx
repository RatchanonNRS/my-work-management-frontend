import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  const { projectId } = useParams(); // Get the ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const { fetchProjectById } = await import('../api/mockProjectsApi');
        const data = await fetchProjectById(projectId);
        setProject(data);
      } catch (err) {
        setError(`Failed to load project details: ${err.message}`);
        console.error('Error fetching project details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [projectId]); // Re-fetch if projectId changes in the URL

  const detailContainerStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  };

  const backButtonStyle = {
    display: 'inline-block',
    marginBottom: '20px',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>Loading project details...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>Error: {error}</div>;
  if (!project) return <div style={{ textAlign: 'center', padding: '50px', color: '#666', fontSize: '1.2em' }}>Project not found.</div>;

  return (
    <div style={detailContainerStyle}>
      <Link to="/" style={backButtonStyle}>← Back to Dashboard</Link>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Project: {project.name}</h1>

      <p><strong>Manager:</strong> {project.manager}</p>
      <p><strong>Start Date:</strong> {project.startDate}</p>
      <p><strong>End Date:</strong> {project.endDate}</p>
      <p><strong>Current Progress:</strong> {project.progress}%</p>

      {/* Placeholder for more detailed elements like budget, timeline, risks from the blue dashboard */}
      <h2 style={{ marginTop: '40px', marginBottom: '15px', color: '#444' }}>Project Details (More coming soon!)</h2>
      <div style={{ border: '1px dashed #ccc', padding: '20px', borderRadius: '5px', color: '#777' }}>
        This is where detailed charts, budget breakdowns, task timelines, and other specific information for "{project.name}" would go, similar to the blue dashboard example. You would fetch more specific data for this project here.
      </div>
    </div>
  );
}

export default ProjectDetail;