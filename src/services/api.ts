
import axios from 'axios';

// Configuration for our API
const BASE_URL = 'http://localhost:5000'; // Change this to your actual backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication APIs
export const loginUser = (credentials: { email: string; password: string; role: string }) => {
  return api.post('/auth/login', credentials);
};

export const registerUser = (userData: { name: string; email: string; password: string; role: string }) => {
  return api.post('/auth/register', userData);
};

export const logoutUser = () => {
  return api.post('/auth/logout');
};

// API calls for skin analysis
export const uploadImage = (formData: FormData) => {
  return api.post('/analyze', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const submitSymptoms = (symptoms: any) => {
  return api.post('/symptoms', symptoms);
};

// Report management
export const getReports = (filters?: any) => {
  return api.get('/reports', { params: filters });
};

export const getReport = (id: string) => {
  return api.get(`/reports/${id}`);
};

// Patient management (for doctors)
export const getPatients = () => {
  return api.post('/patients');
};

export const updatePatientDetails = (patientId: string, details: any) => {
  return api.put(`/patients/${patientId}`, details);
};

// User profile
export const getUserProfile = () => {
  return api.get('/profile');
};

export const updateUserProfile = (profileData: any) => {
  return api.put('/profile', profileData);
};

// Add auth header interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
