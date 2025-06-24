import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    password: "",
    role: "editor", // Default role
    profileImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);

    if (!file) return; // no file selected

    if (file.size > 1 * 1024 * 1024) { // 1 MB limit
      Swal.fire({
        icon: 'error',
        title: 'File too large',
        text: 'Please select a file smaller than 1 MB.',
      });
      return;
    }
    setFormData({ ...formData, profileImage: file });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("Form state before submit:", formData);
    console.log("API Base URL:", API_BASE_URL);

    const formDataObj = new FormData();

    // Append each key/value, skipping null profileImage
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        formDataObj.append(key, formData[key]);
      }
    });

    // Debug: log FormData entries
    for (let pair of formDataObj.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/register`,
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: response.data.message,
      }).then(() => {
        navigate('/dashboard');
      });
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Email already registered',
          text: 'Please use a different email address.',
        });
      } else if (error.response && error.response.data.message === 'File too large') {
        Swal.fire({
          icon: 'error',
          title: 'File too large',
          text: 'Please select a file smaller than 1 MB.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registration failed. Please try again later.',
        });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100">
        <div className="col-lg-8 col-md-8 col-sm-12 mx-auto">
          <div className="form p-4 cardstyle">
          
            <form onSubmit={handleRegister}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
               
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
