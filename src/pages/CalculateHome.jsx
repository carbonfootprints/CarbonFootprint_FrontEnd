import { useState } from 'react';
import Organisation from '../components/Organisation'; // Adjust the path as per your project structure
import ProductionSystem from '../components/ProductionSystem';
import Boundary from '../components/Boundary';
import DirectGHG from '../components/DirectGHG';
import IndirectGHG from '../components/IndirectGHG';
import Report from '../components/Report';

function CalculateHome() {
  const [activeTab, setActiveTab] = useState('organisation'); // Default active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-3 bg-white min-h-screen">
      {/* Nav Section */}
      <div className="w-full bg-black h-16 my-2 rounded-full flex items-center justify-between px-6">
        <p className="text-green-700 text-2xl font-pacifco font-bold">
          {" "}
          PlanetCare{" "}
        </p>
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
