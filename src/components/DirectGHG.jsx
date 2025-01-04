import { useState } from "react";
import ResourceForm from "./ResourceForm";
import { BACKEND_URL } from "../../const";
function DirectGHG() {
  const [activeTab, setActiveTab] = useState("Pernambut"); // Default to "Pernambut"

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Centered Title and Description */}
      <div className="text-center mb-8">
        <h4 className="text-3xl font-semibold mb-2 text-gray-800">Direct GHG</h4>
        <p className="text-gray-600 text-lg">
          Stationary Combustion of fuels - Industrial use
        </p>
      </div>

      

      {/* Buttons */}
      <div className="grid grid-cols-6 gap-4 mb-8">
        <button
          onClick={() => handleTabChange("Pernambut")}
          className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
            activeTab === "Pernambut"
              ? "bg-green-600 text-white scale-105 shadow-lg"
              : "bg-green-200 text-green-800 hover:bg-green-300 hover:scale-105"
          }`}
        >
          BAB Pernambut
        </button>
        <button
          onClick={() => handleTabChange("Consumption")}
          className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
            activeTab === "Consumption"
              ? "bg-green-600 text-white scale-105 shadow-lg"
              : "bg-green-200 text-green-800 hover:bg-green-300 hover:scale-105"
          }`}
        >
          BAB Pernambut, Consumption at CETP
        </button>
        <button
          onClick={() => handleTabChange("Thirumudivakkam")}
          className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
            activeTab === "Thirumudivakkam"
              ? "bg-green-600 text-white scale-105 shadow-lg"
              : "bg-green-200 text-green-800 hover:bg-green-300 hover:scale-105"
          }`}
        >
          BAB Thirumudivakkam
        </button>
      </div>

      {/* Conditional Form Rendering */}
      <div className="w-full max-w-3xl bg-white shadow-md">
        {activeTab === "Pernambut" && (
          <ResourceForm
            locationName="BAB Pernambut"
            apiEndpoint={`${BACKEND_URL}/api/direct/babPernambet`}
          />
        )}
        {activeTab === "Consumption" && (
          <ResourceForm
            locationName="BAB Pernambut, Consumption at CETP"
            apiEndpoint={`${BACKEND_URL}/api/direct/babConsumption`}
          />
        )}
        {activeTab === "Thirumudivakkam" && (
          <ResourceForm
            locationName="BAB Thirumudivakkam"
            apiEndpoint={`${BACKEND_URL}/api/direct/babThirumudivakkam`}
          />
        )}
      </div>
    </div>
  );
}

export default DirectGHG;
