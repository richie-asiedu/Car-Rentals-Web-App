import  { useState } from 'react';
import './Review.css';
import avatar1 from '../assets/Profill (2).png';
import avatar2 from '../assets/Profill (3).png';
import carMain from '../assets/image 8.png';
import carView2 from '../assets/View 2.png';
import carView3 from '../assets/View 3 (1).png';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Review = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const carImages = [carMain, carView2, carView3];

  const reviews = [
    {
      id: 1,
      name: 'Alex Stanton',
      title: 'CEO at Bukalapak',
      date: '21 July 2022',
      rating: 4, 
      avatar: avatar1, 
      text: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    },
    {
      id: 2,
      name: 'Skylar Dias',
      title: 'CEO at Amazon',
      date: '20 July 2022',
      rating: 3, 
      avatar: avatar2,
      text: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    },
  ];

  return (
    <>
      <div className="review-details-grid container">
        <div className="review-hero-card-section">
          <div className="review-main-hero-card">
            <div className="review-hero-card-text">
              <h1>Sports car with the best design and acceleration</h1>
              <p>Safety and comfort while driving a futuristic and elegant sports car</p>
            </div>
            <div className="review-hero-car-image-wrapper">
              <img
                src={carImages[selectedImage]}
                alt="Sports Car"
                className="review-hero-car-image"
              />
            </div>
          </div>
          <div className="review-thumbnail-grid">
            {carImages.map((img, idx) => (
              <div
                key={idx}
                className={`review-thumbnail-item${selectedImage === idx ? ' selected' : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <div className="review-thumbnail-image-wrapper">
                  <img
                    src={img}
                    alt={`Car view ${idx + 1}`}
                    className="review-thumbnail-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="review-car-details-card container">
          <div className="review-car-details-header">
            <div>
              <h2>Nissan GT-R</h2>
              <div className="review-star-rating-details">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="review-star-icon" />
                ))}
                <Star className="review-star-icon review-empty-star" />
                <span className="review-reviewer-count">440+ Reviewer</span>
              </div>
            </div>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="review-like-button"
              aria-label="Like this car"
            >
              <Heart className={`review-heart-icon ${isLiked ? 'liked' : 'unliked'}`} />
            </button>
          </div>
          <p className="review-description-text">
            NISMO has become the embodiment of Nissan's outstanding performance. Inspired by the most unforgiving proving ground, the "race track".
          </p>
          <div className="review-specifications-grid">
            <div className="review-spec-item">
              <p className="review-spec-label">Type Car</p>
              <p className="review-spec-value">Sport</p>
            </div>
            <div className="review-spec-item">
              <p className="review-spec-label">Capacity</p>
              <p className="review-spec-value">2 Person</p>
            </div>
            <div className="review-spec-item">
              <p className="review-spec-label">Steering</p>
              <p className="review-spec-value">Manual</p>
            </div>
            <div className="review-spec-item">
              <p className="review-spec-label">Gasoline</p>
              <p className="review-spec-value">70L</p>
            </div>
          </div>
          <div className="review-pricing-section">
            <div className="review-current-price">
              <span>$80.00/</span>
              <p>day</p>
            </div>
            <div className="review-original-price">
              <span>$100.00</span>
              <div className="review-line-through"></div>
            </div>
            <Link to="/fullpaymentsform">
            <button className="review-rent-now-button">Rent Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="reviews-container ">
      <div className="reviews-header">
        <h2>Reviews</h2>
        <span className="reviews-count">13</span>
      </div>
      {reviews.map(review => (
        <div className="review-item" key={review.id}>
          <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
          <div className="review-content">
            <div className="reviewer-details">
              <div className="reviewer-info">
                <h3>{review.name}</h3>
                <p>{review.title}</p>
              </div>
              <span className="review-date">{review.date}</span>
            </div>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < review.rating ? 'star' : 'star empty'}>&#9733;</span>
              ))}
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        </div>
      ))}
      <button className="show-all-button">
        Show All
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
    </>
  );
};

export default Review;
