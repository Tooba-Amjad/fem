import React, { useState } from 'react';

export default function Topbar({ userRole ,userAvatar, notifications = 5, onSearch, onLogout }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
const API_BASE_URL = import.meta.env.VITE_API_URL;
  const breadcrumbTags = ['#Severe', '#Moderate', '#Mild', '#New'];

  const tagColors = {
    '#Severe': '#dc2626',   // Red
    '#Moderate': '#f97316', // Orange
    '#Mild': '#facc15',     // Yellow
    '#New': '#2563eb',      // Blue
  };




  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }

  function toggleProfileMenu() {
    setProfileMenuOpen(!profileMenuOpen);
  }

  return (
    <header
  className="d-none d-sm-flex justify-content-between align-items-center px-3 py-3 bg-transparent text-dark flex-nowrap "
>

      {/* Left Section */}
      <div className="d-flex align-items-center gap-2 flex-nowrap">
        <div className="fw-bold fs-5" style={{ cursor: 'pointer' }}>
          Dashboard  |
        </div>

        <nav className="d-flex gap-1 flex-nowrap">
          {breadcrumbTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                className="btn btn-sm "
                onClick={() => setActiveTag(isActive ? null : tag)}
                style={{
                  backgroundColor: isActive ? tagColors[tag] : 'transparent',
                  color: isActive ? 'white' : tagColors[tag],
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: 'none',
                  textDecoration: isActive ? 'none' : 'underline',
                  borderRadius: '20px',
                  fontSize:'12px',
                  transition: 'background-color 0.3s ease, color 0.3s ease',
                }}
              >
                {tag}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3 flex-nowrap">
        {/* Search */}
        <input
          type="search"
          className="form-control form-control-sm"
          placeholder="Search reports, users..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ minWidth: '220px' }}
        />

        {/* Notifications */}
        {/* <button
          type="button"
          className="btn btn-link position-relative text-dark p-0"
          title="Notifications"
          style={{ width: '32px', height: '32px' }}
        >
          <i className="bi bi-bell fs-4"></i>
          {notifications > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: '0.65rem' }}
            >
              {notifications}
              <span className="visually-hidden">unread notifications</span>
            </span>
          )}
        </button> */}

        {/* Help Icon */}
        {/* <button
          type="button"
          className="btn btn-link text-dark p-0"
          title="Help / Support"
          style={{ width: '32px', height: '32px' }}
        >
          <i className="bi bi-question-circle fs-4"></i>
        </button> */}

        
        {/* User Profile */}
        <div className="position-relative">
          <img
            src={`${API_BASE_URL}/uploads/${userAvatar}` || "https://i.pravatar.cc/40"}
            alt="User Avatar"
            className="rounded-circle"
            style={{ width: '40px', height: '40px', cursor: 'pointer', border: '1px solid #ddd' }}
            onClick={toggleProfileMenu}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleProfileMenu()}
          />
          {profileMenuOpen && (
            <div
              className="position-absolute end-0 mt-2 bg-white rounded shadow"
              style={{ minWidth: '140px', zIndex: 1050 }}
            >
              <button className="dropdown-item" type="button">Profile</button>
              <button className="dropdown-item" type="button">Settings</button>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => {
                  if (onLogout) onLogout();
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
