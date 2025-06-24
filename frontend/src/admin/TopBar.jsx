// src/components/Topbar/Topbar.js
import React, { useContext, useState, useEffect, useRef } from 'react';

import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../style/Topbar.css'; // Ensure this file exists and contains the styles

const socket = io(  import.meta.env.PROD  ? 'wss://your-production-server.com' : 'ws://localhost:5000');


const Topbar = () => {


  const { user, logout } = useContext(AuthContext);
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleNewNotification = (data) => {
      const message = data.message || 'No message';
      const newNotifications = [...notifications, message];
      setNotifications(newNotifications);
      setHasUnreadNotifications(true); // Set to true when a new notification is received
    };

    socket.on('test_event', handleNewNotification);
    socket.on('comment', handleNewNotification);
    socket.on('message', handleNewNotification);

    return () => {
      
      socket.off('comment', handleNewNotification);
      socket.off('message', handleNewNotification);
    };
  }, [notifications]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  

  const toggleNotificationBox = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      setHasUnreadNotifications(false); // Clear unread notification indicator when box is opened
    }
  };

  const handleAddButtonClick = () => {
    if (user && user.role === 'admin') {
      navigate('/register');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
 <>
 
 

      <button className="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i className="bi bi-list"></i>
      </button>
      <div class="d-flex justify-content-end">
      <div className="position-relative">
        {user && user.role === 'admin' && (
          <button className="add-button" aria-label="Add" onClick={handleAddButtonClick}>
            <i className="bi bi-plus"></i>
          </button>
        )}
        <button className="notification-icon position-relative" aria-label="Notifications" onClick={toggleNotificationBox}>
          <i className="bi bi-bell"></i>
          {hasUnreadNotifications && <span className="badge"></span>}
        </button>
        {showNotifications && (
          <div className="notification-dropdown" ref={notificationRef}>
            <ul>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <li key={index}>{notification}</li>
                ))
              ) : (
                <li>No notifications</li>
              )}
            </ul>
          </div>
        )}
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
      </div>
      </>
  );
};

export default Topbar;
