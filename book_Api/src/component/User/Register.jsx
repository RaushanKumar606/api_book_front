import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const Register = () => {
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
      const response = await fetch(`http://localhost:3030/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const resData = await response.json();
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sign Up Form - Left Column */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="text-center" style={{ width: "75%" }}>
            Sign Up
          </h1>

          <form onSubmit={handleFormSignIn} className="d-flex flex-column gap-3 p-5">
            <TextField
              id="username"
              label="Username"
              name="username"
              variant="outlined"
              value={user.username}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              value={user.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="phone"
              label="Phone"
              name="phone"
              variant="outlined"
              value={user.phone}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              value={user.password}
              onChange={handleChange}
              required
              type="password"
              fullWidth
            />
            <Button
              variant="contained"
              color="success"
              type="submit" // Ensure button submits the form
              style={{ width: "50%", margin: "0 auto" }} // Center button
            >
              Submit
            </Button>
          </form>
        </div>

        {/* Image - Right Column */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://via.placeholder.com/400x400" 
            alt="Sign Up Illustration"
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
  );
};

export { Register };
