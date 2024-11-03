// import { Link } from 'react-router-dom';
import { useState, } from 'react';
import './Home.css'

const images = [
  { 
    src: 'Image/7 Books That Will Help You Conquer The Fear Of Public Speaking.jpg', 
    alt: '7 Books That Will Help You Conquer The Fear Of Public Speaking' 
  },
  { 
    src: 'Image/Bible proves Jesus (PBUH) is not God.jpg', 
    alt: 'Bible Proves Jesus (PBUH) is not God' 
  },
  { 
    src: 'Image/Delivering Gatsby.jpg', 
    alt: 'Delivering Gatsby' 
  },
 
 
  { 
    src: 'Image/7 Books That Will Help You Conquer The Fear Of Public Speaking.jpg', 
    alt: '7 Books That Will Help You Conquer The Fear Of Public Speaking' 
  },
  { 
    src: 'Image/Bible proves Jesus (PBUH) is not God.jpg', 
    alt: 'Bible Proves Jesus (PBUH) is not God' 
  },
  { 
    src: 'Image/Delivering Gatsby.jpg', 
    alt: 'Delivering Gatsby' 
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="container">
    
    <div
            className="slider"
            style={{
                position: 'relative',
                width: '100%',
                margin: '0 auto',
                overflow: 'hidden',
            }}
        >
            <div
                className="slides mt-5 gap-"
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    
                    boxSizing: 'border-box',
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="card"
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            margin: '0 5px', // Margin between cards
                        }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover',
                            }}
                        />
                        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>{image.alt}</p>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
     
      <div className="row m-0 p-0 mt-5">
        <img
          src="/Image/BookImage1.jpg"
          alt="Hero Image"
          className="mb-5"
          style={{ height: '700px', width: '100%', objectFit: 'cover',borderRadius:"3%" }}
        />
        <img
          src="/Image/BookImage.jpg"
          alt="Hero Image"
          className="mb-5"
          style={{ height: '700px', width: '100%', objectFit: 'cover',borderRadius:"3%" }}
        />

        <div className="row">
          <p><b>free Read Library </b></p>
          <div className="col">
            <video
              src="/Video/video1.mp4"
              loop
              autoPlay
              muted
              style={{ width: '100%', height: 'auto',borderRadius:"5%" }}
            />
          </div>

          <div className="col">
            <video
              src="/Video/video2.mp4"
              loop
              autoPlay
              muted
              style={{ width: '100%', height: 'auto',borderRadius:"5%" }}
            />
          </div>

          <div className="col">
            <video
              src="/Video/video3.mp4"
              loop
              autoPlay
              muted
              style={{ width: '100%', height: 'auto',borderRadius:"5%" }}
            />
          </div>
        </div>

      
      </div>
    </div>
  );
};

export { Home };
