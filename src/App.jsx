import React, { useState, useEffect } from "react";
import Login from "./Pages/login";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import StudentPage from "./Pages/Student";
import { auth } from "../firebaseConfig";
import PlayGround from "./Pages/PlayGround";
function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  useEffect(() => {
    // Check if user is already signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
        if (storedUser) {
          setUser(storedUser.user);
        } else {
          setUser(null);
        }
      }
    });
  
    return () => unsubscribe();
  }, []);
  
  return (
    <div className="App">
     
     <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/playGround" element={<PlayGround />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/student" element={<StudentPage userData={user}> </StudentPage>} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
