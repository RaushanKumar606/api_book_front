import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const BooksQuery = () => {
  const navigate = useNavigate();
  const [booksQuery, setBooksQuery] = useState({
    username: "",
    email: "",
    authorName: "",
    subject: "",
    query: "",
  });

  const booksQueryHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(``, {
        method: "POST",

        headers: {
          "Contact-Type": "application/json",
        },
        body: JSON.stringify(booksQuery),
      });
      if (response.ok) {
        setBooksQuery({
          username: "",
          email: "",
          subject: "",
          query: "",
          authorName: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBooksQuery({
      ...booksQuery,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
     
        <div className="col-6  flex-column align-items-center">
     
          <h2 className="gradient-text mt-5">
            Books <span>Query</span>
          </h2>
          <form
            onSubmit={booksQueryHandle}
            className="col-12 gap-3  d-flex flex-column"
          >
            <TextField
              id="username"
              label="Username"
              name="username"
              variant="outlined"
              value={booksQuery.username}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="email"
              label="email"
              name="email"
              variant="outlined"
              value={booksQuery.email}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="authorName"
              label="authorName"
              name="authorName"
              variant="outlined"
              value={booksQuery.authorName}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              id="subject"
              label="subject"
              name="subject"
              variant="outlined"
              value={booksQuery.subject}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              id="query"
              label="query"
              name="query"
              variant="outlined"
              value={booksQuery.query}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              style={{ width: "50%", margin: "0 25%", marginTop: "2rem" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export { BooksQuery };
