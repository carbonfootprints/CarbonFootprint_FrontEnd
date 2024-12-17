import React, { useState } from "react";

function IndirectGHG() {
  const [activeTab, setActiveTab] = useState("purchasedElectricity");
  const [subTab, setSubTab] = useState("Category2Pernambut"); // Sub-tabs for forms

  return (
    <div className="w-full bg-green-50 border px-4 sm:px-8 py-8 shadow-lg rounded-lg">
      {/* Centered Heading */}
      <h4 className="text-center text-2xl font-semibold text-green-800 mb-6">
        Indirect GHG Emission
      </h4>

      {/* Tab Buttons */}
      <div className="flex flex-nowrap gap-4 mb-6">
        <button
          onClick={() => setActiveTab("purchasedElectricity")}
          className={`flex-1 py-2 px-4 rounded-lg text-green-800 font-medium text-center ${
            activeTab === "purchasedElectricity"
              ? "bg-green-600 text-white"
              : "bg-green-100 hover:bg-green-200"
          }`}
        >
          Purchased Electricity
        </button>
        <button
          onClick={() => setActiveTab("fromTransportation")}
          className={`flex-1 py-2 px-4 rounded-lg text-green-800 font-medium text-center ${
            activeTab === "fromTransportation"
              ? "bg-green-600 text-white"
              : "bg-green-100 hover:bg-green-200"
          }`}
        >
          From Transportation
        </button>
        <button
          onClick={() => setActiveTab("fromProductsUsed")}
          className={`flex-1 py-2 px-4 rounded-lg text-green-800 font-medium text-center ${
            activeTab === "fromProductsUsed"
              ? "bg-green-600 text-white"
              : "bg-green-100 hover:bg-green-200"
          }`}
        >
          From Products Used
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white border border-green-200 p-6 rounded-lg shadow-md flex justify-center items-center min-h-screen">
  <div className="w-full max-w-3xl">
    {/* Purchased Electricity Tab */}
    {activeTab === "purchasedElectricity" && (
      <>
        <h3 className="text-3xl font-semibold text-green-700 mb-6 text-center">
          Purchased Electricity
        </h3>

        {/* Sub-Tab Buttons */}
        <div className="flex gap-4 mb-6 justify-center">
          <button
            onClick={() => setSubTab("Category2Pernambut")}
            className={`flex-1 py-2 px-4 rounded-lg text-green-800 font-medium text-center ${
              subTab === "Category2Pernambut"
                ? "bg-green-500 text-white"
                : "bg-green-100 hover:bg-green-200"
            }`}
          >
            BAB Pernambut
          </button>
          <button
            onClick={() => setSubTab("Category2Thirumudivakkam")}
            className={`flex-1 py-2 px-4 rounded-lg text-green-800 font-medium text-center ${
              subTab === "Category2Thirumudivakkam"
                ? "bg-green-500 text-white"
                : "bg-green-100 hover:bg-green-200"
            }`}
          >
            BAB Thirumudivakkam
          </button>
        </div>

        {/* Sub-Tab Content */}
        <div className="w-full bg-green-50 border border-green-300 p-8 shadow-2xl rounded-xl mx-auto">
          {subTab === "Category2Pernambut" && (
            <form className="space-y-6">
              <h5 className="text-2xl font-bold text-green-800 mb-6 border-b border-green-300 pb-2 text-center">
                BAB Pernambut
              </h5>
              <div className="space-y-2">
                <label className="block text-green-700 font-medium">Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-green-700 font-medium">
                  KWH Tannery
                </label>
                <input
                  type="text"
                  placeholder="Enter KWH Tannery"
                  className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-green-700 font-medium">KWH CEPT</label>
                <input
                  type="text"
                  placeholder="Enter KWH CEPT"
                  className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
            </form>
          )}

          {subTab === "Category2Thirumudivakkam" && (
            <form className="space-y-6">
              <h5 className="text-2xl font-bold text-green-800 mb-6 border-b border-green-300 pb-2 text-center">
                BAB Thirumudivakkam
              </h5>
              <div className="space-y-2">
                <label className="block text-green-700 font-medium">Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-green-700 font-medium">KWH</label>
                <input
                  type="text"
                  placeholder="Enter KWH"
                  className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-green-700 font-medium">
                  T&D Loss KWH
                </label>
                <input
                  type="text"
                  placeholder="Enter T&D Loss KWH"
                  className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                />
              </div>
            </form>
          )}
        </div>
      </>
    )}
  </div>
</div>

    </div>
  );
}

export default IndirectGHG;
