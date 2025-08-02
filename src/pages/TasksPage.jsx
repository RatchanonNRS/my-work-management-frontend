import React, { useState } from 'react';
import TaskForm from '../components/TaskForm'; // Re-use the TaskForm
import TaskList from '../components/TaskList'; // Re-use the TaskList

// We'll rename the original tasksApi.js to mockTasksApi.js for this example.
// Make sure to update the import paths in TaskForm and TaskList if you move them.
// For this example, let's assume they use their *own* internal mock API.
// If you want them to use the original fetch-based API, ensure that API is working
// or that they also use a mock version (like the one below).

// IMPORTANT: For simplicity here, TaskForm and TaskList will still use their own internal `import '../api/tasksApi'`
// so for this page to work, make sure your `src/api/tasksApi.js` either contains the *mock data* version
// or is connected to a *real backend* that provides task data.

function TasksPage() {
  const [refreshTasks, setRefreshTasks] = useState(0); // State to trigger TaskList refresh

  const handleTaskAdded = () => {
    setRefreshTasks(prev => prev + 1);
  };

  const pageContainerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const sectionStyle = {
    marginBottom: '30px',
  };

  return (
    <div style={pageContainerStyle}>
      <h1 style={{ marginBottom: '30px', color: '#333' }}>Task Management</h1>
      <section style={sectionStyle}>
        <TaskForm onTaskAdded={handleTaskAdded} />
      </section>
      <section style={sectionStyle}>
        <TaskList refreshTrigger={refreshTasks} />
      </section>
    </div>
  );
}

export default TasksPage;