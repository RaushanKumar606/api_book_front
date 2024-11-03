// import { useState } from 'react';
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { InputLabel, FormControl } from "@mui/material";

// const CreateBook = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     publisher: '',
//     year: '',
//     genre: '',
//     isbn: '',
//     summary: '',
//     coverImage: null,
//     pdfFile: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'file' ? files[0] : value, // Handle file inputs correctly
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//    try {
//      const response = await fetch(`http://localhost:8080/api/book/publish`,{
//       method:"POST",
//       headers:{
//         'Contact-Type':'application/json'
//       },
//      })
//      if(response.ok){
//       alert("add book")
    
//      }
//    } catch (error) {
//     console.log(error)
//    }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Create Book Form - Left Column */}
//         <div className="col-md-6 d-flex flex-column justify-content-center">
//           <h1 className="text-center" style={{ width: "75%" }}>
//             Create Book
//           </h1>

//           <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 p-5">
//             <TextField
//               id="title"
//               label="Title"
//               name="title"
//               variant="outlined"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               fullWidth
//             />
//             <TextField
//               id="author"
//               label="Author"
//               name="author"
//               variant="outlined"
//               value={formData.author}
//               onChange={handleChange}
//               required
//               fullWidth
//             />
//             <TextField
//               id="publisher"
//               label="Publisher"
//               name="publisher"
//               variant="outlined"
//               value={formData.publisher}
//               onChange={handleChange}
//               required
//               fullWidth
//             />
           
//             <TextField
//               id="genre"
//               label="Genre"
//               name="genre"
//               variant="outlined"
//               value={formData.genre}
//               onChange={handleChange}
//               required
//               fullWidth
//             />
//             <TextField
//               id="isbn"
//               label="ISBN"
//               name="isbn"
//               variant="outlined"
//               value={formData.isbn}
//               onChange={handleChange}
//               required
//               fullWidth
//             />
//             <TextField
//               id="summary"
//               label="Summary"
//               name="summary"
//               variant="outlined"
//               multiline
//               rows={2}
//               value={formData.summary}
//               onChange={handleChange}
//               required
//               fullWidth
//             />
//             {/* Cover Image File Input */}
//             <FormControl fullWidth required>
//               <InputLabel htmlFor="coverImage">Cover Image</InputLabel>
//               <input
//                 type="file"
//                 name="coverImage"
//                 id="coverImage"
//                 accept="image/*" 
//                 onChange={handleChange}
//                 style={{ display: 'none' }} 
//               />
//               <Button
//                 variant="outlined"
//                 component="span"
//                 onClick={() => document.getElementById('coverImage').click()}
//                 fullWidth
//               >
//                 Upload Cover Image
//               </Button>
//             </FormControl>
//             {/* PDF File Input */}
//             <FormControl fullWidth required>
//               <InputLabel htmlFor="pdfFile">PDF File</InputLabel>
//               <input
//                 type="file"
//                 name="pdfFile"
//                 id="pdfFile"
//                 accept="application/pdf" 
//                 onChange={handleChange}
//                 style={{ display: 'none' }}
//               />
//               <Button
//                 variant="outlined"
//                 component="span"
//                 onClick={() => document.getElementById('pdfFile').click()}
//                 fullWidth
//               >
//                 Upload PDF File
//               </Button>
//             </FormControl>
//             <Button
//               variant="contained"
//               color="success"
//               type="submit" 
//               style={{ width: "50%",  }} 
//             >
//               Submit
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { CreateBook };










import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { InputLabel, FormControl } from "@mui/material";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publisher: '',
    year: '',
    genre: '',
    isbn: '',
    summary: '',
    coverImage: null,
    pdfFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value, // Store files properly
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
        method: 'POST',
        body: data, // Send FormData
      });
console.log(response)
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
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="text-center" style={{ width: "75%" }}>Create Book</h1>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 p-4">
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
            {/* <TextField
              id="author"
              label="Author"
              name="author"
              variant="outlined"
              value={formData.author}
              onChange={handleChange}
              required
              fullWidth
            /> */}
            <TextField
              id="publisher"
              label="Publisher"
              name="publisher"
              variant="outlined"
              value={formData.publisher}
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
              id="isbn"
              label="ISBN"
              name="isbn"
              variant="outlined"
              value={formData.isbn}
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

            {/* Cover Image Input */}
            <FormControl fullWidth required>
              <InputLabel shrink>Cover Image</InputLabel>
              <input
                type="file"
                name="coverImage"
                id="coverImage"
                accept="image/*"
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <Button
                variant="outlined"
                component="span"
                onClick={() => document.getElementById('coverImage').click()}
                fullWidth
              >
                Upload Cover Image
              </Button>
            </FormControl>

            {/* PDF File Input */}
            <FormControl fullWidth required>
              <InputLabel shrink>PDF File</InputLabel>
              <input
                type="file"
                name="pdfFile"
                id="pdfFile"
                accept="application/pdf"
                onChange={handleChange}
                style={{ display: 'none' }}
              />
              <Button
                variant="outlined"
                component="span"
                onClick={() => document.getElementById('pdfFile').click()}
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
