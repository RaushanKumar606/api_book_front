import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Login Form */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
          {" "}
          {/* Adjusted for mobile */}
          <h1 className="text-center" style={{ width: "75%" }}>
            Login
          </h1>
          <div className="d-flex flex-column gap-3 p-5">
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              required
              style={{ width: "75%" }} // Full width to be responsive
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              required
              type="password"
              style={{ width: "75%" }} // Full width to be responsive
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
          </div>
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
