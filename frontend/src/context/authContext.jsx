import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Named import for jwt-decode

export const AuthContext = createContext();
const apiUrl = import.meta.env.VITE_API_URL;


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Check token on initial load
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedUser = decodeToken(token);
            setUser(decodedUser);
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${apiUrl}/api/auth/login`, { email, password });
            localStorage.setItem('token', response.data.token); // Store token
            const decodedUser = decodeToken(response.data.token); // Decode token to get user details
            setUser(decodedUser); // Update state with decoded user
            navigate('/dashboard'); // Navigate to dashboard
        } catch (error) {
            console.error('Login failed:', error.message);
            throw new Error(error.response?.data?.message || 'Login failed'); // Throw specific error message
        }
    };

    // Decode JWT token to get user details
    const decodeToken = (token) => {
        try {
            const decodedData = jwtDecode(token);
          
            return decodedData;
        } catch (error) {
            console.error('Token decoding error:', error);
            return {}; // Return empty object in case of error
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Update user information
    const updateUser = (newUserData) => {
        setUser(prevUser => ({
            ...prevUser,
            ...newUserData
        }));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, error, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
