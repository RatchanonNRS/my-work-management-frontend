// src/components/TaskList.jsx
import React, { useEffect, useState, useCallback } from 'react';
import TaskItem from './TaskItem';

function TaskList({ refreshTrigger }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasksData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // IMPORTANT: This will now use your mockTasksApi.js for tasks
      const { fetchTasks } = await import('../api/mockTasksApi'); // Changed path to use the mockTasksApi
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError(`Failed to load tasks: ${err.message}`);
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasksData();
  }, [fetchTasksData, refreshTrigger]); // Re-fetch when refreshTrigger changes (e.g., after adding a task)

  const handleUpdate = useCallback(async (id, updatedFields) => {
    setError(null);
    try {
      // IMPORTANT: This will now use your mockTasksApi.js for tasks
      const { updateTask } = await import('../api/mockTasksApi'); // Changed path to use the mockTasksApi
      await updateTask(id, updatedFields);
      fetchTasksData(); // Refresh the list after update for immediate feedback
    } catch (err) {
      setError(`Failed to update task: ${err.message}`);
      console.error('Error updating task:', err);
    }
  }, [fetchTasksData]);

  const handleDelete = useCallback(async (id) => {
    setError(null);
    try {
      // IMPORTANT: This will now use your mockTasksApi.js for tasks
      const { deleteTask } = await import('../api/mockTasksApi'); // Changed path to use the mockTasksApi
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      setError(`Failed to delete task: ${err.message}`);
      console.error('Error deleting task:', err);
    }
  }, []);

  const listContainerStyle = {
    padding: '20px',
    backgroundColor: '#f0f2f5',
    borderRadius: '8px',
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading tasks...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center', padding: '20px' }}>Error: {error}</div>;
  if (tasks.length === 0) return <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>No tasks found. Add a new one!</div>;

  return (
    <div style={listContainerStyle}>
      <h2>All Tasks</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={handleUpdate}
          onDeleteTask={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;