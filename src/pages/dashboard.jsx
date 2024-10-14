import React, { useState } from "react";
import { auth } from "../firebase"; 
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import './dashboard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

const Dashboard = () => {
    const user = auth.currentUser; 
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        console.log("User signed out");
        navigate("/");
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
  
    return (
      <div className="dashboard">
        <nav className="navbar">
          <div className="user-account">
            <FontAwesomeIcon 
              icon={faUser}
              className="user-icon" 
              onClick={toggleDropdown}
              style={{ cursor: 'pointer', fontSize: '24px', marginLeft: '1410px' }} // Adjust size and cursor
            />
            {isDropdownOpen && ( 
              <div className="dropdown-content">
                {user?.displayName || "User"}
                <button onClick={handleLogout}>Log Out</button>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  };
  
  export default Dashboard;
  
