// src/components/TaskItem.jsx
import React from 'react';

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const itemStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const contentStyle = {
    flexGrow: 1,
  };

  const titleStyle = {
    margin: '0 0 5px 0',
    color: '#333',
  };

  const descriptionStyle = {
    margin: '0 0 10px 0',
    color: '#666',
    fontSize: '0.9em',
  };

  const statusStyle = {
    fontWeight: 'bold',
    color: task.status === 'Done' ? 'green' : (task.status === 'In Progress' ? 'orange' : 'red'),
  };

  const dueDateStyle = {
    fontSize: '0.85em',
    color: '#777',
  };

  const buttonContainerStyle = {
    marginLeft: '20px',
    display: 'flex',
    gap: '10px',
  };

  const buttonStyle = {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.8em',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white',
  };

  const toggleButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };

  const handleToggleStatus = () => {
    const newStatus = task.status === 'Done' ? 'To Do' : 'Done'; // Simple toggle for demo
    onUpdateTask(task.id, { ...task, status: newStatus });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id);
    }
  };

  return (
    <div style={itemStyle}>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{task.title}</h3>
        {task.description && <p style={descriptionStyle}>{task.description}</p>}
        <p><span style={statusStyle}>Status: {task.status}</span></p>
        {task.dueDate && <p style={dueDateStyle}>Due: {task.dueDate}</p>}
      </div>
      <div style={buttonContainerStyle}>
        <button onClick={handleToggleStatus} style={toggleButtonStyle}>
          {task.status === 'Done' ? 'Mark To Do' : 'Mark Done'}
        </button>
        <button onClick={handleDelete} style={deleteButtonStyle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;