import React, { useState } from 'react';
import Organisation from '../components/Organisation'; // Adjust the path as per your project structure

function CalculateHome() {
  const [activeTab, setActiveTab] = useState('organisation'); // Default active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Buttons */}
      <div className="grid grid-cols-6 gap-2 mb-6">
        <button
          onClick={() => handleTabChange('organisation')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${
            activeTab === 'organisation' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
          }`}
        >
          Organisation
        </button>
        <button
          onClick={() => handleTabChange('productionSystem')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${
            activeTab === 'productionSystem' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
          }`}
        >
          Production System
        </button>
        <button
          onClick={() => handleTabChange('boundary')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${
            activeTab === 'boundary' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
          }`}
        >
          Boundary
        </button>
        <button
          onClick={() => handleTabChange('directGHG')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${
            activeTab === 'directGHG' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
          }`}
        >
          Direct GHG
        </button>
        <button
          onClick={() => handleTabChange('inDirectGHG')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${
            activeTab === 'inDirectGHG' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
          }`}
        >
          inDirect GHG
        </button>
        <button
          onClick={() => handleTabChange('getReport')}
          className={`col-span-6 sm:col-span-1 font-bold py-3 rounded-lg transition ${
            activeTab === 'getReport' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'
          }`}
        >
          Get Report
        </button>
      </div>

      {/* Content */}
      <div className="p-4 border rounded-lg bg-gray-100 shadow-lg">
        {activeTab === 'organisation' && <Organisation />}
        {activeTab === 'productionSystem' && (
          <p className="text-gray-700">Content for Production System</p>
        )}
        {activeTab === 'boundary' && <p className="text-gray-700">Content for Boundary</p>}
        {activeTab === 'directGHG' && <p className="text-gray-700">Content for Direct GHG</p>}
        {activeTab === 'inDirectGHG' && <p className="text-gray-700">Content for inDirect GHG</p>}
        {activeTab === 'getReport' && <p className="text-gray-700">Content for Report Generation</p>}
      </div>
    </div>
  );
}

export default CalculateHome;
