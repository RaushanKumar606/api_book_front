import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();

  const [userLog, setUserlog] = useState({
    email: "",
    password: "",
  });
  //  input handeling
  const handleLog = (e) => {
    setUserlog({
      ...userLog,
      [e.target.name]: e.target.value,
    });
  };
  // form handeling
  const handleFormLogin = async(e) => {
    e.perventDefault();
    try {
      const respons = await fetch(`http://localhost:8080/api/users/login`,{
        method:'POST',
        headers:{
          'Contant-Type':'application/json',
        },
        body:JSON.stringify(userLog),
      })
      const resData = await respons.json();
      console(resData);
      if(respons.ok){
        
        console.log('login Sussful ')
       

        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Login Form */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
         
          {/* Adjusted for mobile */}
          <h1 className="text-center" style={{ width: "75%" }}>
            Login
          </h1>
          <form
            onSubmit={handleFormLogin}
            className="d-flex flex-column gap-3 p-5"
          >
            <TextField
              id="email"
              label="email"
              name="email"
              variant="outlined"
              value={userLog.email}
              onChange={handleLog}
              required
              style={{ width: "75%" }} 
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              value={userLog.password}
              onChange={handleLog}
              required
              type="password"
              style={{ width: "75%" }}
            />

            {/* Button with 25% left and right spacing */}
            <div
              className="d-flex justify-content-center"
              style={{ width: "75%" }}
            >
              <Button
                variant="contained"
                color="success"
                style={{ width: "50%", margin: "0 12%" }} // Adjusted for mobile
              >
                Login
              </Button>
            </div>
          </form>
        </div>

        {/* Right Column: Image */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          {" "}
          {/* Adjusted for mobile */}
          <img
            src="https://via.placeholder.com/400x400" // Replace with your image URL
            alt="Login Illustration"
            className="img-fluid" // Bootstrap class to make image responsive
          />
        </div>
      </div>
    </div>
  );
};

export { Login };
