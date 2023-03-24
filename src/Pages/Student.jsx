import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StudentPage(userData) {
  const navigate = useNavigate();

  const handleClearLocalStorage = () => {
    localStorage.clear();
    // You can also use localStorage.removeItem('key') to remove specific items from localStorage
  }

  const handleLogout = () => {
    handleClearLocalStorage();
    navigate("/login");
  }

  return (
    <div>
      <h1>
        Hi Stud {userData.userData.displayName}
      </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default StudentPage;
