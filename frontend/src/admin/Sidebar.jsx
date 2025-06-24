import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/authContext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Dropdown } from 'react-bootstrap';
import '../style/Sidebar.css';
const apiUrl = import.meta.env.VITE_API_URL;

const menuItems = {
    admin: [
        { path: "/dashboard", icon: "bi-speedometer2", text: "Dashboard" },
        { path: "/market-list", icon: "bi-file-earmark-text", text: "Market List" },
        { path: "/product-list", icon: "bi-clipboard-data", text: "Products" },
        
        { path: "/addnews", icon: "bi-envelope", text: "Newsletter" },
        { path: "/settings", icon: "bi-gear", text: "Settings" }
    ],
    editor: [
        { path: "/blogs", icon: "bi-file-earmark-text", text: "Blogs" },
        { path: "/projects", icon: "bi-clipboard-data", text: "Projects" },
        { path: "/settings", icon: "bi-gear", text: "Settings" }
    ],
    guest: [
        { path: "/login", icon: "bi-box-arrow-in-right", text: "Login" }
    ]
};

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState('');
    
    const userRole = user ? user.role : 'guest';
    const accessibleMenuItems = menuItems[userRole] || menuItems.guest;

    useEffect(() => {
     
        if (user && user.profileImage) {
          
            setProfileImage(`${apiUrl}/uploads/${user.profileImage}?t=${Date.now()}`);
           
        }
    }, [user?.profileImage]);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    return (
        <>
         
            <div className="col-md-3 col-lg-2 sidebar d-none d-lg-block">
                <div className="admin-info">
                    {profileImage ? (
                        <img 
                            src={profileImage} 
                            alt={user ? user.fullName : "User"} 
                            className="img-fluid" 
                        />
                    ) : (
                        <div className="no-image">No Image</div>
                    )}
                 <p> {capitalizeFirstLetter(user.role)} Panel</p>
                </div>
                <nav className="flex-column">
                    {accessibleMenuItems.map((item, index) => (
                        item.path === "/settings" ? (
                            <Dropdown key={index} className="nav-link p-0">
                                <Dropdown.Toggle variant="light" id="dropdown-settings">
                                    <i className={`bi ${item.icon}`}></i> {item.text}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/register">Register</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/settings/change-password">Change Password</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/settings/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/settings/edit-profile">Edit Profile</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/settings/manage-roles">Manage Roles</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <NavLink
                                key={index}
                                to={item.path}
                                className="nav-link"
                                activeClassName="active"
                            >
                                <i className={`bi ${item.icon}`}></i> {item.text}
                            </NavLink>
                        )
                    ))}
                </nav>
                <div className="vertical-line"></div>
            </div>

         
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasMenuLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="nav flex-column">
                        {accessibleMenuItems.map((item, index) => (
                            item.path === "/settings" ? (
                                <Dropdown key={index} className="">
                                    <Dropdown.Toggle variant="light" id="dropdown-settings-mobile">
                                        <i className={`bi ${item.icon}`}></i> {item.text}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={NavLink} to="/register">Register</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/settings/change-password">Change Password</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/settings/profile">Profile</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/settings/edit-profile">Edit Profile</Dropdown.Item>
                                        <Dropdown.Item as={NavLink} to="/settings/manage-roles">Manage Roles</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className={`bi ${item.icon}`}></i> {item.text}
                                </NavLink>
                            )
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
