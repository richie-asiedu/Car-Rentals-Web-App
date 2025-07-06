import React from 'react';
import './SideBar.css';
import { FaTimes } from 'react-icons/fa';

const SideBar = ({ isOpen, onClose }) => {
    const [price, setPrice] = React.useState(100);

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <>
            {/* Close button for mobile overlay */}
            {onClose && (
                <button className="close-icon block lg:hidden absolute top-4 right-4 z-50 bg-gray-100 rounded-full p-2" onClick={onClose} aria-label="Close sidebar">
                    <FaTimes size={24} />
                </button>
            )}
            <div className={`sidebar-container${isOpen ? ' open' : ''}`}>
                <div className="sidebar-image-layout">
                    <div className="filter-section">
                        <h3 className="sidebar-section-title">TYPE</h3>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" defaultChecked /> Sport <span className="sidebar-count">(10)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" defaultChecked /> SUV <span className="sidebar-count">(12)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" /> MPV <span className="sidebar-count">(16)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" /> Sedan <span className="sidebar-count">(20)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" /> Coupe <span className="sidebar-count">(14)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" /> Hatchback <span className="sidebar-count">(14)</span>
                        </label>
                    </div>

                    <div className="filter-section">
                        <h3 className="sidebar-section-title">CAPACITY</h3>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" defaultChecked /> 2 Person <span className="sidebar-count">(10)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" /> 4 Person <span className="sidebar-count">(14)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" /> 6 Person <span className="sidebar-count">(12)</span>
                        </label>
                        <label className="sidebar-checkbox">
                            <input type="checkbox" defaultChecked /> 8 or More <span className="sidebar-count">(16)</span>
                        </label>
                    </div>

                    <div className="filter-section">
                        <h3 className="sidebar-section-title">PRICE</h3>
                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={price}
                            onChange={handlePriceChange}
                            className="sidebar-slider"
                        />
                        <p className="sidebar-price-label">Max. ${price}.00</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
