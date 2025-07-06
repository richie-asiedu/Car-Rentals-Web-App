import React, { useState } from 'react';
import './Payments.css';
import Visa from '../assets/Visa.png';
import Paypal from '../assets/PayPal.png';
import Bitcoin from '../assets/Bitcoin.png';
import Shield from '../assets/ic-security-safety.png';
import Car from '../assets/image 8.png';
import { Link } from 'react-router-dom';

const Payments = () => {
  const [rentalType, setRentalType] = useState('pick-up');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRentalTypeChange = (event) => {
    setRentalType(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="payment-form-container">
      <div className="left-column">
        <div className="form-section billing-info-section">
          <div className="section-header">
            <h2>Billing Info</h2>
            <p>Please enter your billing info</p>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Phone number" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Address" />
            </div>
            <div className="form-group">
              <label htmlFor="city">Town / City</label>
              <input type="text" id="city" placeholder="Town or city" />
            </div>
          </div>
        </div>

        
        <div className="form-section rental-info-section">
          <div className="section-header">
            <h2>Rental Info</h2>
            <p>Please select your rental date</p>
          </div>
          <div className="pick-up-section">
            <label className="radio-group">
              <input
                type="radio"
                name="rental-type"
                value="pick-up"
                checked={rentalType === 'pick-up'}
                onChange={handleRentalTypeChange}
              /> Pick - Up
            </label>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickup-location">Locations</label>
                <select id="pickup-location">
                  <option value="">Select your city</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pickup-date">Date</label>
                  <input type="date" id="pickup-date" placeholder="Date" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickup-time">Time</label>
                <input type="time" id="pickup-time" placeholder="Time" />
              </div>
            </div>
          </div>

          <div className="drop-off-section">
            <label className="radio-group">
              <input
                type="radio"
                name="rental-type"
                value="drop-off"
                checked={rentalType === 'drop-off'}
                onChange={handleRentalTypeChange}
              /> Drop - Off
            </label>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dropoff-location">Locations</label>
                <select id="dropoff-location">
                  <option value="">Select your city</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="dropoff-date">Date</label>
                <input type="date" id="dropoff-date" placeholder="Date" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dropoff-time">Time</label>
                <input type="time" id="dropoff-time" placeholder="Time" />
              </div>
            </div>
          </div>
        </div>

      
        <div className="form-section payment-method-section">
          <div className="section-header payment-method-header-titles">
            <h2 className="payment-method-title">Payment Method</h2>
            <p className="payment-method-subtitle">Please enter your payment method</p>
          </div>
          <div className="payment-method-header">
            <div className="payment-method-radio-label">
              <input
                type="radio"
                className="payment-radio"
                name="payment-method"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onChange={handlePaymentMethodChange}
              />
              <span className="payment-method-radio-text">Credit Card</span>
            </div>
            <div className="credit-card-logos">
              <img src={Visa} alt="Visa" />
            </div>
          </div>

          {paymentMethod === 'credit-card' && (
            <div className="credit-card-fields credit-card-form-cols">
              <div>
                <div className="form-group">
                  <label htmlFor="card-number">Card Number</label>
                  <input type="text" id="card-number" placeholder="Card number" />
                </div>
                <div className="form-group">
                  <label htmlFor="card-holder">Card Holder</label>
                  <input type="text" id="card-holder" placeholder="Card holder" />
                </div>
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="expiration-date">Expiration Date</label>
                  <input type="text" id="expiration-date" placeholder="DD / MM / YY" />
                </div>
                <div className="form-group">
                  <label htmlFor="cvc">CVC</label>
                  <input type="text" id="cvc" placeholder="CVC" />
                </div>
              </div>
            </div>
          )}

          
          <div className="payment-method-option paypal-method-option">
            <label className="payment-method-radio-label">
              <input
                type="radio"
                className="payment-radio"
                name="payment-method"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={handlePaymentMethodChange}
              />
              <span className="payment-method-radio-text">PayPal</span>
            </label>
            <span className="paypal-logo-wrapper">
              <img src={Paypal} alt="PayPal" className="paypal-logo" />
            </span>
          </div>

          
          <div className="payment-method-option bitcoin-method-option">
            <label className="payment-method-radio-label">
              <input
                type="radio"
                className="payment-radio"
                name="payment-method"
                value="bitcoin"
                checked={paymentMethod === 'bitcoin'}
                onChange={handlePaymentMethodChange}
              />
              <span className="payment-method-radio-text">Bitcoin</span>
            </label>
            <span className="bitcoin-logo-wrapper">
              <img src={Bitcoin} alt="Bitcoin" className="bitcoin-logo" />
            </span>
          </div>
        </div>
        
        <div className="form-section confirmation-section">
          <div className="section-header">
            <h2>Confirmation</h2>
            <p>We are getting to the end. Just few clicks and your rental is ready!</p>
          </div>
          <div className="confirmation-checkboxes">
            <label>
              <input type="checkbox" /> I agree with sending an Marketing and newsletter emails. No spam, promissed!
            </label>
            <label>
              <input type="checkbox" /> I agree with our terms and conditions and privacy policy.
            </label>
          </div>
          <Link to="/userprofile">
            <button className="rent-now-button">Rent Now</button>
          </Link>
          <div className="security-info">
            <img src={Shield} alt="Shield" />
            <h4>All your data are safe</h4>
            <p>We are using the most advanced security to provide the best experience ever.</p>
          </div>
        </div>
      </div>

      <div className="right-column">
        <div className="rental-summary-container">
          <div className="rental-summary-header">
            <h2>Rental Summary</h2>
            <p>Prices may change depending on the length of the rental and the price of your rental car.</p>
          </div>

          <div className="car-details alt-layout">
            <div className="car-image-wrapper">
              <img src={Car} alt="Nissan GT-R" className="car-image" />
            </div>
            <div className="car-info-vertical">
              <h4 className="car-title-alt">Nissan GT - R</h4>
              <div className="star-review-row-alt">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star empty">&#9733;</span>
                <span className="reviewer-count">440+ Reviewer</span>
              </div>
            </div>
          </div>

          <div className="price-breakdown">
            <div className="price-item">
              <p>Subtotal</p>
              <span>$80.00</span>
            </div>
            <div className="price-item">
              <p>Tax</p>
              <span>$0</span>
            </div>
          </div>

          <div className="promo-code-section">
            <input type="text" placeholder="Apply promo code" className="promo-input" />
            <button className="apply-now-button">Apply now</button>
          </div>

          <div className="total-rental-price">
            <h3>Total Rental Price</h3>
            <span>$80.00</span>
          </div>
          <p className="rental-discount-info">{isMobile ? 'Overall price rental' : 'Overall price and includes rental discount'}</p>
        </div>
      </div>
    </div>
  );
};

export default Payments; 