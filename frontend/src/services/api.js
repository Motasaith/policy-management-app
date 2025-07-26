import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to: ${config.url}`);
    
    // Add auth token if available
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Policy API functions
export const policyAPI = {
  // Search policy by CNIC or policy number
  searchPolicy: async (searchType, searchValue) => {
    try {
      const queryParam = searchType === 'cnic' ? 'cnic' : 'policyNumber';
      const response = await api.get(`/api/policies/search?${queryParam}=${searchValue}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create new policy
  createPolicy: async (policyData) => {
    try {
      const response = await api.post('/api/policies', policyData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get all policies (for testing)
  getAllPolicies: async () => {
    try {
      const response = await api.get('/api/policies');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/api/health');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default api;
