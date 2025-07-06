import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import { FaHeart, FaBell, FaCog } from 'react-icons/fa';
import filterIcon from '../../assets/Filter.png';
import searchIcon from '../../assets/search-normal.png';

const Navbar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: 'all',
    carType: 'all',
    transmission: 'all'
  });

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <h1 className="logo">EvansRentals</h1>
          </Link>
        </div>

        <div className="search-container">
          <div className="search-bar">
            <img src={searchIcon} alt="Search" className="search-icon" />
            <input type="text" placeholder="Search something here" />
            <button
              className="filter-button-desktop"
              onClick={() => setShowFilters(!showFilters)}
            >
              <img src={filterIcon} alt="Filter" />
            </button>
          </div>
          <button
            className="filter-button-mobile"
            onClick={() => setShowFilters(!showFilters)}
          >
            <img src={filterIcon} alt="Filter" />
          </button>

          {showFilters && (
            <div className="filters-dropdown">
              <div className="filter-group">
                <label>Price Range:</label>
                <select 
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="all">All Prices</option>
                  <option value="0-50">$0 - $50/day</option>
                  <option value="51-100">$51 - $100/day</option>
                  <option value="101+">$101+/day</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Car Type:</label>
                <select 
                  value={filters.carType}
                  onChange={(e) => setFilters({...filters, carType: e.target.value})}
                >
                  <option value="all">All Types</option>
                  <option value="sport">Sport</option>
                  <option value="suv">SUV</option>
                  <option value="mvp">MVP</option>
                  <option value="sedan">Sedan</option>
                  <option value="coupe">Coupe</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Transmission:</label>
                <select 
                  value={filters.transmission}
                  onChange={(e) => setFilters({...filters, transmission: e.target.value})}
                >
                  <option value="all">All</option>
                  <option value="automatic">Automatic</option>
                  <option value="manual">Manual</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="navbar-icons">
          <button className="icon-button">
            <FaHeart className="nav-icon" />
          </button>
          <button className="icon-button notification">
            <FaBell className="nav-icon" />
            <div className="notification-badge"></div>
          </button>
          <button className="icon-button">
            <FaCog className="nav-icon" />
          </button>
          <Link to="/profile">
            <div className="icon-container profile">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="profile-pic" />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
