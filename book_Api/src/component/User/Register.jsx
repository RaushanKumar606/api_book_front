import './register.css'
import Button from "@mui/material/Button";
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Form handling
  const handleFormSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const resData = await response.json();
      console.log(resData);
      if(response.ok){
        setUser({username:"",email:"",mobile:"",password:""})
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="registration-form-container">
      <div className="registration-form">
        <div className="logo treanding">
          <img src="Images/treanding.png" alt="King Logo" />
        </div>
        <h2>Welcome</h2>
        <p>Register now, it&quot;s free!</p>
        <form onSubmit={handleFormSignIn}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={user.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="number"
            placeholder="number"
            value={user.number}
            onChange={handleChange}
            required
          />
         
         <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <div className="form-options">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={user.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>
            <a href="">Forgot Password?</a>
          </div>
          <Button
                variant="contained"
                color="success"
                style={{ width: "50%", margin: "0 12%" }}
              >
                Login
              </Button>
        </form>
        <p className="login-link">
          Already a member? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};
export { Register };
