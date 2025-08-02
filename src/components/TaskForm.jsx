// src/components/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [dueDate, setDueDate] = useState(''); // YYYY-MM-DD format
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const formStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  };

  const inputGroupStyle = {
    marginBottom: '10px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: 'calc(100% - 20px)',
    padding: '8px 10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#61dafb',
    color: 'black',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
    marginTop: '10px',
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!title) {
      setError('Task title is required.');
      setLoading(false);
      return;
    }

    try {
      // IMPORTANT: This will now use your mockTasksApi.js for tasks
      // Make sure 'src/api/tasksApi.js' (the one imported below)
      // has the MOCK DATA version of the tasks API if your backend isn't ready.
      const { createTask } = await import('../api/mockTasksApi'); // Changed path to use the mockTasksApi
      await createTask({ title, description, status, dueDate });
      setTitle('');
      setDescription('');
      setStatus('To Do');
      setDueDate('');
      if (onTaskAdded) {
        onTaskAdded(); // Notify parent component to refresh tasks
      }
    } catch (err) {
      setError(`Failed to add task: ${err.message}`);
      console.error('Error adding task:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Add New Task</h2>
      {error && <p style={errorStyle}>{error}</p>}
      <div style={inputGroupStyle}>
        <label htmlFor="title" style={labelStyle}>Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={inputStyle}
          placeholder="e.g., Design landing page"
        />
      </div>
      <div style={inputGroupStyle}>
        <label htmlFor="description" style={labelStyle}>Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          style={inputStyle}
          placeholder="e.g., Outline sections and content"
        ></textarea>
      </div>
      <div style={inputGroupStyle}>
        <label htmlFor="status" style={labelStyle}>Status:</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={inputStyle}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div style={inputGroupStyle}>
        <label htmlFor="dueDate" style={labelStyle}>Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button type="submit" disabled={loading} style={buttonStyle}>
        {loading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;