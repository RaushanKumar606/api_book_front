import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./booksDetails.css";
const BookDetails = () => {
  const { id } = useParams(); // Extract the 'id' from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
//  console.log(id);
  // Fetch the book details when the component mounts or 'id' changes
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Replace this URL with your actual API endpoint
        const response = await fetch(`http://localhost:8080/api/book/${id}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        setBook(data);
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div>Loading book details...</div>;
  }

  if (error || !book) {
    return <div>Sorry, there was an error loading the book details.</div>;
  }

  const { title, genre, ISBN, publishedYear, summary, language } = book;

  return (
    <>
      <section className="book-details-section">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <div className="card book-details-card">
                <div className="row g-0">
                  <div className="col-6 left-section">
                    <img
                      src={book.coverImage}
                      alt={title}
                      className="img-fluid"
                    />
                    {/* <div className="row">
                    <div className="col"> read</div>
                    <div className="col"><a href='#'>rees</a></div>
                    </div> */}
                  </div>
                  <div className="col-6 right-section">
                    <div className="card-body">
                      <h1 className="book-title">{title}</h1>
                      <p className="book-author"> {book.authorName}(Author)</p>
                      <p className="book-genre">Genre: {genre}</p>
                      <p className="book-ISBN">ISBN: {ISBN}</p>
                      <p className="book-publishedYear">
                        Publish: {publishedYear}
                      </p>
                      <p className="book-language">Language: {language}</p>
                      <p className="book-summary">{summary}</p>
                      {/* Add more book details as needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <div className="container">
        <div className="product-description">
          <h2>Product Description </h2>
          <b>
            <p>About the Author</p>
          </b>
          <p className="book-author"> {book.authorName}</p>
       
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="product-details">
          <h2>Product Details </h2>
          <p className="book-publishedYear">
                        <b>Publisher:-</b> {publishedYear}
                      </p>
          <p className="book-language"><b>Language:-</b>  {language}</p>
          <p className="book-genre"><b>Genre:-</b>{genre}</p>
          <p className="book-ISBN"><b>ISBN:-</b> {ISBN}</p>
        </div>
      </div>
      
    </>
  );
};

export { BookDetails };
