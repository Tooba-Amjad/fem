import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error message
    const { login } = useContext(AuthContext); // Get login function from AuthContext
const apiUrl = import.meta.env.VITE_API_URL;
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            // Call login function from AuthContext
            await login(email, password);
        } catch (error) {
            setError(error.message); // Set error message from login function
        }
    };

  
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row w-100">
                <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
                    <div className="card form p-4" >
                        <h2 className="text-center mb-4">✦ Login Form ✦</h2>
                        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                        <form onSubmit={handleLogin}>
                            <div className="form-group mb-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
