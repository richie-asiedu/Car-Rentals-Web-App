import React, { useState } from 'react'
import './RecommendationCars.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Car1 from '../../assets/image 9.png'
import Car2 from '../../assets/image 10.png'
import Car3 from '../../assets/image 11.png'
import Car4 from '../../assets/image 12.png'
import Car5 from '../../assets/image 13.png'
import Car6 from '../../assets/image 14.png'
import Car7 from '../../assets/image 15.png'
import Car8 from '../../assets/image 16.png'
import gasIcon from '../../assets/Vector1.png'
import transmissionIcon from '../../assets/Car (9).png'
import capacityIcon from '../../assets/profile-2user.png'

const RecommendationCars = () => {
  const [likedCars, setLikedCars] = useState([2, 4, 5, 7]); 

  const toggleLike = (id) => {
    setLikedCars(prev => 
      prev.includes(id) 
        ? prev.filter(carId => carId !== id)
        : [...prev, id]
    );
  };

  const cars = [
    {
      id: 1,
      name: 'All New Rush',
      category: 'SUV',
      image: Car1,
      fuelCapacity: '70L',
      transmission: 'Manual',
      capacity: '6 People',
      price: '72.00'
    },
    {
      id: 2,
      name: 'CR  - V',
      category: 'SUV',
      image: Car2,
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: '80.00',
    },
    {
      id: 3,
      name: 'All New Terios',
      category: 'SUV',
      image: Car3,
      fuelCapacity: '90L',
      transmission: 'Manual',
      capacity: '6 People',
      price: '74.00'
    },
    {
      id: 4,
      name: 'CR  - V',
      category: 'SUV',
      image: Car4,
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: '80.00',
    },
    {
      id: 5,
      name: 'MG ZX Exclusice',
      category: 'Hatchback',
      image: Car5,
      fuelCapacity: '70L',
      transmission: 'Manual',
      capacity: '4 People',
      price: '76.00',
      originalPrice: '80.00'
    },
    {
      id: 6,
      name: 'New MG ZS',
      category: 'SUV',
      image: Car6,
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: '80.00',
    },
    {
      id: 7,
      name: 'MG ZX Excite',
      category: 'Hatchback',
      image: Car7,
      fuelCapacity: '90L',
      transmission: 'Manual',
      capacity: '4 People',
      price: '74.00',
    },
    {
      id: 8,
      name: 'New MG ZS',
      category: 'SUV',
      image: Car8,
      fuelCapacity: '80L',
      transmission: 'Manual',
      capacity: '6 People',
      price: '80.00',
    }
  ];

  return (
    <div className="recommendation-cars-container">
      <div className="cars-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <div className="card-header">
              <div className="car-title">
                <h3>{car.name}</h3>
                <span className="car-category">{car.category}</span>
              </div>
              <button 
                className={`favorite-btn ${likedCars.includes(car.id) ? 'liked' : ''}`}
                onClick={() => toggleLike(car.id)}
              >
                {likedCars.includes(car.id) ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
            </div>
            
            <div className="car-image">
              <img src={car.image} alt={car.name} />
            </div>

            <div className="car-specs">
              <div className="spec-item">
                <img src={gasIcon} alt="Fuel" className="spec-icon" />
                <span>{car.fuelCapacity}</span>
              </div>
              <div className="spec-item">
                <img src={transmissionIcon} alt="Transmission" className="spec-icon" />
                <span>{car.transmission}</span>
              </div>
              <div className="spec-item">
                <img src={capacityIcon} alt="Capacity" className="spec-icon" />
                <span>{car.capacity}</span>
              </div>
            </div>

            <div className="card-footer">
              <div className="price-container">
                <div className="price">
                  <span className="amount">${car.price}</span>
                  <span className="period">/day</span>
                </div>
                {car.originalPrice && (
                  <div className="original-price">
                    <span className="strike-through">${car.originalPrice}</span>
                  </div>
                )}
              </div>
              <Link to="/details" style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className="rent-button">Rent Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        <button className="show-all-cars-btn">Show more car</button>
        <span className="car-count">120 Cars</span>
      </div>
    </div>
  );
};

export default RecommendationCars;
