import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputLabel, FormControl } from "@mui/material";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    coverImage: null,
    file: null,
    publishedYear: "",
    language: "",
    genre: "",
    ISBN: "",
    pages: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await fetch(`http://localhost:8080/api/book/publish`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Book added successfully!");
      } else {
        console.error("Failed to add book.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-4 mx-auto   " style={{ borderRadius: "15px", border: "1px solid #ccc", padding: "20px" }}>
          <h1 className="text-center" style={{ width: "100%" }}>
            Create Book
          </h1>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-1">
            <TextField
              id="title"
              label="Title"
              name="title"
              variant="outlined"
              value={formData.title}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="authorName"
              label="Author Name"
              name="authorName"
              variant="outlined"
              value={formData.authorName}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="publishedYear"
              label="Published Year"
              name="publishedYear"
              type="number"
              variant="outlined"
              value={formData.publishedYear}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="language"
              label="Language"
              name="language"
              variant="outlined"
              value={formData.language}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="genre"
              label="Genre"
              name="genre"
              variant="outlined"
              value={formData.genre}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="ISBN"
              label="ISBN"
              name="ISBN"
              variant="outlined"
              value={formData.ISBN}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="pages"
              label="Pages"
              name="pages"
              type="number"
              variant="outlined"
              value={formData.pages}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="summary"
              label="Summary"
              name="summary"
              variant="outlined"
              multiline
              rows={2}
              value={formData.summary}
              onChange={handleChange}
              required
              fullWidth
            />

            <FormControl fullWidth required>
              <InputLabel shrink>Cover Image</InputLabel>
              <input
                type="file"
                name="coverImage"
                id="coverImage"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <Button
                variant="outlined"
                component="span"
                onClick={() => document.getElementById("coverImage").click()}
                fullWidth
              >
                Upload Cover Image
              </Button>
            </FormControl>

            <FormControl fullWidth required>
              <InputLabel shrink>PDF File</InputLabel>
              <input
                type="file"
                name="file"
                id="file"
                accept="application/pdf"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <Button
                variant="outlined"
                component="span"
                onClick={() => document.getElementById("file").click()}
                fullWidth
              >
                Upload PDF File
              </Button>
            </FormControl>

            <Button
              variant="contained"
              color="success"
              type="submit"
              style={{ width: "50%", alignSelf: "center", marginTop: "1rem" }}
            >
              Submit
            </Button>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export { CreateBook };
