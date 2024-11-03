import { useState, useEffect } from "react";
import './Book.css'
import { Link } from 'react-router-dom';
const Book = () => {
  const [books, setBooks] = useState([]);

  // Fetch books when the component mounts
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/book/`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data)
        setBooks(data); 
      } else {
        console.error("Failed to fetch books.");
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };



  return (
    <section className="service-section">
      <div className="container">
        <div className="row">
          {books.map((book) => {
            const { _id, title,  } = book;
            return (
              <div className="col-6" key={_id}>
                <div className="card">
                  <Link to={`/book/${_id}`} className="card-link">
                  <div
            className="book-details-card"
            style={{ backgroundImage: `url(${book.coverImage})` }}
          >
                    </div>
                    <div className="card-detail">
                      <h2 className="service-name">{title}</h2>
                      {/* <p className="description">{summary}</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

};

export { Book };
