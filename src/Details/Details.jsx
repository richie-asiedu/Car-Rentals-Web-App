import React, { useState } from 'react';
import Nav2 from '../Component/Nav2/Nav2';
import SideBar from '../Component/SideBar/SideBar';
import PopularCars from '../Component/PopularCars/PopularCars';
import RecommendationCars from '../Component/RecommendationCars/RecommendationCars';
import Footer from '../Component/Footer/Footer';
import Review from '../Review/Review';
import { FaBars } from 'react-icons/fa';

const Details = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className='category-page flex flex-col bg-gray-50'>
      <Nav2 />
      <div className="flex flex-1">
        <aside className="hidden lg:block w-1/5 min-w-[280px] bg-white border-r px-6 py-8">
          <SideBar isOpen={true} />
        </aside>
        <button
          className="fixed top-5 left-4 z-[1100] bg-white rounded-full shadow p-2 lg:hidden"
          onClick={toggleSidebar}
          aria-label="Open sidebar"
        >
          <FaBars size={24} />
        </button>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[1200] bg-black bg-opacity-40 flex lg:hidden" onClick={closeSidebar}>
            <div
              className="bg-white w-4/5 max-w-[357px] h-full p-6 shadow-lg relative"
              onClick={e => e.stopPropagation()}
            >
              <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
            </div>
          </div>
        )}
        <main
          className="flex-1 flex flex-col px-2 md:px-5 lg:px-8 pt-0 pb-0"
          style={{
            overflowX: 'auto',
            overflowY: 'auto',
            paddingTop: 0
          }}
        >
          <section className="flex-1" style={{ width: '100%' }}>
            <Review />
            <PopularCars />
            <RecommendationCars />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
