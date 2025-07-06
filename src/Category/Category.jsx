import React, { useState } from 'react'
import './Category.css'
import Nav2 from '../Component/Nav2/Nav2'
import SideBar from '../Component/SideBar/SideBar'
import Booking from '../Component/Booking/Booking'
import PopularCars from '../Component/PopularCars/PopularCars'
import RecommendationCars from '../Component/RecommendationCars/RecommendationCars'
import Footer from '../Component/Footer/Footer'
import { FaBars } from 'react-icons/fa'

const Category = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className='category-page flex flex-col bg-gray-50'>
      <Nav2 />
      <div className="flex flex-1">
        {/* Sidebar for large screens */}
        <aside className="hidden lg:block w-1/5 min-w-[286px] bg-white border-r px-6 py-8">
          <SideBar isOpen={true} />
        </aside>
        {/* Hamburger for mobile */}
        <button
          className="fixed top-5 left-4 z-[1100] bg-white rounded-full shadow p-2 lg:hidden"
          onClick={toggleSidebar}
          aria-label="Open sidebar"
        >
          <FaBars size={24} />
        </button>
        {/* Sidebar overlay for mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[1200] bg-black bg-opacity-40 flex lg:hidden" onClick={closeSidebar}>
            <div
              className="bg-white w-4/5 max-w-[355px] h-full p-6 shadow-lg relative"
              onClick={e => e.stopPropagation()}
            >
              <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
            </div>
          </div>
        )}
        {/* Main Content */}
        <main
          className="flex-1 flex flex-col px-2 md:px-5 lg:px-8 pt-5 pb-0"
          style={{
            overflowX: 'auto',
            overflowY: 'auto'
          }}
        >
          {/* Booking Section */}
          <section className="mb-8" style={{ width: '100%' }}>
            <Booking />
          </section>
          {/* Car Cards Grid */}
          <section className="flex-1" style={{ width: '100%' }}>
            <PopularCars />
            <RecommendationCars />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Category

