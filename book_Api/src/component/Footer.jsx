import "../Footer.css";
const Footer = () => {
  return (
    
    <footer className="bg-light text-dark mt-5 p-5">
        <hr />
      <div className="container">
        <div className="row text-center">
          {/* Column for Image */}
          <div className="col-md-2 mb-4 d-flex justify-content-center ">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Open Library Logo"
              className="img-fluid" // Responsive image
            />
          </div>

          {/* Column 1: Open Library Links */}
          <div className="col-md-2 mb-4">
            <h5>Open Library</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#vision">Vision</a>
              </li>
              <li>
                <a href="#donate">Donate</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#volunteer">Volunteer</a>
              </li>
              <li>
                <a href="#partner">Partner With Us</a>
              </li>

              <li>
                <a href="#terms">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Discover Links */}
          <div className="col-md-2 mb-4">
            <h5>Discover</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/books">Books</a>
              </li>
              <li>
                <a href="/authors">Authors</a>
              </li>
              <li>
                <a href="/subjects">Subjects</a>
              </li>
              <li>
                <a href="#collections">Collections</a>
              </li>
              <li>
                <a href="#advanced-search">Advanced Search</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Change Language Links */}
          <div className="col-md-2 mb-4">
            <h5>Language</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#sc">संस्कृतम्</a>
              </li>
              <li>
                <a href="#hi">हिंदी</a>
              </li>
              <li>
                <a href="#en">English</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Help Links */}
          <div className="col-md-2 mb-4">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#help-center">Help Center</a>
              </li>
              <li>
                <a href="/create">Add a Book</a>
              </li>
              <li>
                <a href="#release-notes">Release Notes</a>
              </li>
              <li>
                <a href="#suggest-edits">Suggesting Edits</a>
              </li>
              <li>
                <a href="#report-problem">Report A Problem</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5>Cobtact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#help-center">Email</a>
              </li>
              <li>
                <a href="#report-problem">Twitter</a>
              </li>
              <li>
                <a href="#suggest-edits">Linkedln</a>
              </li>
              <li>
                <a href="#add-book">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* last footer  */}
      <div className="container">
  <div className="row">
    <div className="col">
      Copyright © 2024 | Templately Open Book Library
    </div>
    <div className="col d-flex justify-content-end"> {/* Align icons to the right */}
      <div className="d-flex gap-4"> {/* Add gap-4 class here */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube fa-lg"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</div>
<hr />
    </footer>
  );
};

export { Footer };
