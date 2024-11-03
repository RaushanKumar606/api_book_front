import { useState } from "react";
const Contact = () => {
  const [contact, setContact] = useState({
    username: '',
    email: '',
    comment: '',
  });

  // Handle user comment input
  const handleContact = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
       const respons = await fetch (`http://localhost:3030/api/users/contact`,{
        method:"POST",
        headers:{
          'Contact-Type':'application/json'
        },
        body:JSON.stringify(contact)
       })
       if(respons.ok){
        setContact({username:'',email:'',comment:''});

       }
       else{
        alert("msg not send ")
       }
    } catch (error) {
       console.log(error)
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Contact Form */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
        <h1 className="text-center" style={{ width: "75%" }}>
           Contact
          </h1>
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 p-5">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={contact.username}
              onChange={handleContact}
              required
              className="form-control"
              style={{ width: "75%" }} 
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contact.email}
              onChange={handleContact}
              required
              className="form-control"
              style={{ width: "75%" }} 
            />
            <textarea
              name="comment"
              placeholder="Comment"
              value={contact.comment}
              onChange={handleContact}
              required
              className="form-control"
              style={{ width: "75%" }} 
              rows="4"
            />
            <button type="submit" 
            className="btn btn-success"
            style={{ width: "75%" }} 
            >Submit</button>
          </form>
        </div>

        {/* Right Column: Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="Contact Illustration"
            className="img-fluid" // Makes the image responsive
          />
        </div>
      </div>
    </div>
  );
};

export { Contact };
