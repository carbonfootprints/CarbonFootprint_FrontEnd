import { useState } from "react";
import ResourceForm from "./ResourceForm";

function DirectGHG() {
  const [activeCategory, setActiveCategory] = useState("Category1"); // Default Category
  const [activeTab, setActiveTab] = useState("Pernambut"); // Default Tab

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "Category2") {
      setActiveTab("Category2Pernambut"); // Default to Category2 Pernambut
    } else if (category === "Category1") {
      setActiveTab("Pernambut"); // Default to Category1 Pernambut
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen flex flex-col items-center">
      {/* Centered Title */}
      <div className="text-center mb-8">
        <h4 className="text-4xl font-eczar font-semibold mb-2 text-green-800">
          Direct GHG
        </h4>
      </div>

      {/* Category Buttons */}
      <div className="flex p-3 font-eczar rounded-lg loginWrapper gap-4 mb-6">
        <button
          onClick={() => handleCategoryChange("Category1")}
          className={`font-semibold py-2 px-4 rounded-lg transition-all transform ${
            activeCategory === "Category1"
              ? "bg-green-600 text-white scale-105 shadow-lg"
              : "bg-green-200 text-green-800 hover:bg-green-300 hover:scale-105"
          }`}
        >
          Stationary Combustion of fuels - Industrial use
        </button>
        <button
          onClick={() => handleCategoryChange("Category2")}
          className={`font-semibold py-2 px-4 rounded-lg transition-all transform ${
            activeCategory === "Category2"
              ? "bg-green-600 text-white scale-105 shadow-lg"
              : "bg-green-200 text-green-800 hover:bg-green-300 hover:scale-105"
          }`}
        >
          Purchased Electricity
        </button>
      </div>

      {/* Content for Category 1 */}
      {activeCategory === "Category1" && (
        <>
          <div className="grid grid-cols-6 p-3 font-josefin rounded-lg loginWrapper gap-4 mb-8">
            <button
              onClick={() => handleTabChange("Pernambut")}
              className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
                activeTab === "Pernambut"
                  ? "bg-green-700 text-white scale-105 shadow-lg"
                  : "bg-green-100 text-green-800 hover:bg-green-200 hover:scale-105"
              }`}
            >
              BAB Pernambut
            </button>
            <button
              onClick={() => handleTabChange("Consumption")}
              className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
                activeTab === "Consumption"
                  ? "bg-green-700 text-white scale-105 shadow-lg"
                  : "bg-green-100 text-green-800 hover:bg-green-200 hover:scale-105"
              }`}
            >
              BAB Pernambut, Consumption at CETP
            </button>
            <button
              onClick={() => handleTabChange("Thirumudivakkam")}
              className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
                activeTab === "Thirumudivakkam"
                  ? "bg-green-700 text-white scale-105 shadow-lg"
                  : "bg-green-100 text-green-800 hover:bg-green-200 hover:scale-105"
              }`}
            >
              BAB Thirumudivakkam
            </button>
          </div>

          {/* Conditional Form Rendering */}
          <div className="w-full max-w-3xl bg-green-50 border border-green-200 p-6 shadow-lg rounded-lg">
            {activeTab === "Pernambut" && (
              <ResourceForm
                locationName="BAB Pernambut"
                apiEndpoint="http://localhost:8000/api/pernambut"
              />
            )}
            {activeTab === "Consumption" && (
              <ResourceForm
                locationName="BAB Pernambut, Consumption at CETP"
                apiEndpoint="http://localhost:8000/api/consumption"
              />
            )}
            {activeTab === "Thirumudivakkam" && (
              <ResourceForm
                locationName="BAB Thirumudivakkam"
                apiEndpoint="http://localhost:8000/api/thirumudivakkam"
              />
            )}
          </div>
        </>
      )}

      {/* Content for Category 2 */}
      {activeCategory === "Category2" && (
        <>
          <div className="grid grid-cols-6 p-3 rounded-lg loginWrapper font-josefin gap-4 mb-8">
            <button
              onClick={() => handleTabChange("Category2Pernambut")}
              className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
                activeTab === "Category2Pernambut"
                  ? "bg-green-700 text-white scale-105 shadow-lg"
                  : "bg-green-100 text-green-800 hover:bg-green-200 hover:scale-105"
              }`}
            >
              BAB Pernambut
            </button>
            <button
              onClick={() => handleTabChange("Category2Thirumudivakkam")}
              className={`col-span-6 sm:col-span-2 font-semibold py-2 px-4 rounded-lg transition-all transform ${
                activeTab === "Category2Thirumudivakkam"
                  ? "bg-green-700 text-white scale-105 shadow-lg"
                  : "bg-green-100 text-green-800 hover:bg-green-200 hover:scale-105"
              }`}
            >
              BAB Thirumudivakkam
            </button>
          </div>

          {/* Conditional Forms for Category 2 */}
          <div className="w-full font-solway max-w-3xl bg-green-50 border border-green-300 p-8 shadow-2xl rounded-xl">
            {activeTab === "Category2Pernambut" && (
              <form className="space-y-6">
                <h5 className="text-2xl font-bold text-green-800 mb-6 border-b border-green-300 pb-2">
                  BAB Pernambut
                </h5>
                <div className="space-y-2">
                  <label className="block text-green-700 font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-green-700 font-medium">
                    KWH Tannery
                  </label>
                  <input
                    type="text"
                    placeholder="Enter KWH Tannery"
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-green-700 font-medium">
                    KWH CEPT
                  </label>
                  <input
                    type="text"
                    placeholder="Enter KWH CEPT"
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  />
                </div>
              </form>
            )}
            {activeTab === "Category2Thirumudivakkam" && (
              <form className="space-y-6">
                <h5 className="text-2xl font-bold text-green-800 mb-6 border-b border-green-300 pb-2">
                  BAB Thirumudivakkam
                </h5>
                <div className="space-y-2">
                  <label className="block text-green-700 font-medium">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-green-700 font-medium">
                    KWH
                  </label>
                  <input
                    type="text"
                    placeholder="Enter KWH"
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-green-700 font-medium">
                    T&D Loss KWH
                  </label>
                  <input
                    type="text"
                    placeholder="Enter T&D Loss KWH"
                    className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  />
                </div>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DirectGHG;
