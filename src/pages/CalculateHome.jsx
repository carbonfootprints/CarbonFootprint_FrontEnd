import { useState } from 'react';
import Organisation from '../components/Organisation'; // Adjust the path as per your project structure
import ProductionSystem from '../components/ProductionSystem';
import Boundary from '../components/Boundary';
import DirectGHG from '../components/DirectGHG';
import IndirectGHG from '../components/IndirectGHG';
import Report from '../components/Report';
import logoutIcon from '../assets/logout.svg';
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from "axios";
import { BACKEND_URL } from "../../const";
import leaf from '../assets/leaf.svg';


function CalculateHome() {
  const [activeTab, setActiveTab] = useState('organisation'); // Default active tab

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/user/logout`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          },
          withCredentials: true, // Ensure cookies are included
        }
      );
  
      if (response.status === 200) {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        navigate('/', { replace: true }); // Redirect to login page and replace current page in history
      }
    } catch (error) {
      console.error('Logout error:', error);
      // Handle the error (e.g., show a message to the user)
    }
  };
  

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-3 bg-white min-h-screen">
      {/* Nav Section */}
      <div className="w-full bg-black h-16 rounded-full flex my-2 items-center justify-between px-6">
        <div className="flex items-center">
                  <img src={leaf} alt="Leaf Icon" className="h-8 w-8 mr-2" /> {/* Leaf Icon */}
                  <p className="text-green-400 text-2xl font-pacifco font-bold">PlanetCare</p>
                </div>

        {/* Logout Icon */}
        <div className="relative">
          <img
            src={logoutIcon}
            alt="Logout"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShowLogoutPopup(!showLogoutPopup)} // Toggle the popup on click
          />

          {/* Logout Popup (Modal) */}
          {showLogoutPopup && (
            <div className="absolute top-10 right-0 bg-white shadow-md p-4 rounded-md">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Buttons */}
      <div className="grid font-eczar grid-cols-6 gap-2 mb-6">
        <button
          onClick={() => handleTabChange('organisation')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${activeTab === 'organisation' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
            }`}
        >
          Organisation
        </button>
        <button
          onClick={() => handleTabChange('productionSystem')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${activeTab === 'productionSystem' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
            }`}
        >
          Production System
        </button>
        <button
          onClick={() => handleTabChange('boundary')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${activeTab === 'boundary' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
            }`}
        >
          Boundary
        </button>
        <button
          onClick={() => handleTabChange('directGHG')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${activeTab === 'directGHG' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
            }`}
        >
          Direct GHG
        </button>
        <button
          onClick={() => handleTabChange('inDirectGHG')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${activeTab === 'inDirectGHG' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
            }`}
        >
          InDirect GHG
        </button>

        <button
          onClick={() => handleTabChange('getReport')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${activeTab === 'getReport' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
            }`}
        >
          Get Report
        </button>
      </div>

      {/* Content */}
      <div className="p-2 bg-white border rounded-lg  shadow-lg">
        {activeTab === 'organisation' && <Organisation />}
        {activeTab === 'productionSystem' && <ProductionSystem />}
        {activeTab === 'boundary' && <Boundary />}
        {activeTab === 'directGHG' && <DirectGHG />}
        {activeTab === 'inDirectGHG' && <IndirectGHG />}
        {activeTab === 'getReport' && <Report />}
      </div>
    </div>
  );
}

export default CalculateHome;
