import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">EvansRentals</h2>
          <p>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-section links">
            <h3>About</h3>
            <ul>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Featured</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">Bussiness Relation</a></li>
            </ul>
          </div>
          <div className="footer-section links">
            <h3>Community</h3>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Invite a friend</a></li>
            </ul>
          </div>
          <div className="footer-section links">
            <h3>Socials</h3>
            <ul>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 EvansRentals. All rights reserved</p>
        <div className="footer-legal">
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 