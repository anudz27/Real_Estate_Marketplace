// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Adjust the URL to match your backend

const register = (formData) => {
    return axios.post(`${API_URL}/signUp`, formData);
};

export default { register};
