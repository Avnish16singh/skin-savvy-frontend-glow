
import axios from 'axios';

// Configuration for our API
const BASE_URL = 'http://localhost:5000'; // Change this to your actual backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API calls for skin analysis
export const uploadImage = (formData: FormData) => {
  return api.post('/analyze', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getReports = () => {
  return api.get('/reports');
};

export const getReport = (id: string) => {
  return api.get(`/reports/${id}`);
};

export default api;
