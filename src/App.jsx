import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ProjectsDashboard from './pages/ProjectsDashboard';
import ProjectDetail from './pages/ProjectDetail';
import TasksPage from './pages/TasksPage'; // Import the new TasksPage
import './index.css'; // Global styles

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ProjectsDashboard />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/tasks" element={<TasksPage />} /> {/* Route for tasks page */}
          {/* Add more routes here as your application grows */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;