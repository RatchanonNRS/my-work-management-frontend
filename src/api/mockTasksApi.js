// MOCK API for Projects - Temporary in-memory data
const MOCK_PROJECTS = [
  {
    id: 'proj1',
    name: 'Project Alpha',
    manager: 'Alice',
    startDate: '2024-01-15',
    endDate: '2024-09-30',
    progress: 43,
    plannedHours: 34.5,
    actualHours: 27.5,
    risksHigh: 1, risksMedium: 1, risksLow: 2,
  },
  {
    id: 'proj2',
    name: 'Project Beta',
    manager: 'Bob',
    startDate: '2024-02-01',
    endDate: '2024-10-15',
    progress: 29,
    plannedHours: 30.5,
    actualHours: 21.5,
    risksHigh: 1, risksMedium: 0, risksLow: 2,
  },
  {
    id: 'proj3',
    name: 'Project Gamma',
    manager: 'Charlie',
    startDate: '2024-03-01',
    endDate: '24-11-30',
    progress: 78, // Let's make one almost done
    plannedHours: 28.0,
    actualHours: 29.5,
    risksHigh: 0, risksMedium: 0, risksLow: 1,
  },
  {
    id: 'proj4',
    name: 'Project Delta',
    manager: 'Diana',
    startDate: '2024-04-10',
    endDate: '2025-01-20',
    progress: 10,
    plannedHours: 22.0,
    actualHours: 9.0,
    risksHigh: 1, risksMedium: 1, risksLow: 1,
  },
];

const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllProjects = async () => {
  console.log("MOCK API: Fetching all projects...");
  await simulateDelay(600);
  return Promise.resolve([...MOCK_PROJECTS]);
};

export const fetchProjectById = async (id) => {
  console.log(`MOCK API: Fetching project with ID: ${id}...`);
  await simulateDelay(400);
  const project = MOCK_PROJECTS.find(p => p.id === id);
  if (project) {
    return Promise.resolve(project);
  } else {
    return Promise.reject(new Error('MOCK ERROR: Project not found.'));
  }
};

// You can add mock functions for creating, updating, deleting projects if needed later.