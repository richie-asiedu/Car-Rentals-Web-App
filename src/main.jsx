import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Category from './Category/Category.jsx'
import Details from './Details/Details.jsx'
import Review from './Review/Review.jsx'
import FullPaymentsForm from './FullPaymentsForm/FullPaymentsForm.jsx'
import UserProfile from './UserProfile/UserProfile.jsx'
import ScrollToTop from './Component/ScrollToTop.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="category" element={<Category />} />
        <Route path="/details" element={<Details />} />
        <Route path="/review" element={<Review />} />
        <Route path="/fullpaymentsform" element={<FullPaymentsForm />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)
