import axios from 'axios';

const API_BASE =
  'https://413final-boud-backend-d0hfewhzetdtafg7.eastus-01.azurewebsites.net/api/Entertainer';

export const getAllEntertainers = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

// Fetch entertainers with total bookings and latest booking date
export const getEntertainersWithStats = async () => {
  const response = await axios.get(`${API_BASE}/WithStats`);
  return response.data;
};

export const getEntertainerById = async (id: number) => {
  const response = await axios.get(`${API_BASE}/${id}`);
  return response.data;
};

export const addEntertainer = async (entertainer: any) => {
  const response = await axios.post(API_BASE, entertainer);
  return response.data;
};

export const updateEntertainer = async (id: number, entertainer: any) => {
  await axios.put(`${API_BASE}/${id}`, entertainer);
};

export const deleteEntertainer = async (id: number) => {
  await axios.delete(`${API_BASE}/${id}`);
};
