import { useState } from "react";
import axios from "axios";

const ResourceForm = ({ locationName, apiEndpoint, directGHGId }) => {
  const [formData, setFormData] = useState({
    date: "",
    woodenPallets: "",
    firewood: "",
    diesel: "",
    directGHGId: directGHGId || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Sending data to the backend
      const response = await axios.post(apiEndpoint, formData);
      console.log("Data saved successfully:", response.data);
      alert(`Data saved successfully for ${locationName}`);
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white font-solway p-6 rounded-lg w-full max-w-lg mx-auto animate-fade-in"
      style={{ animation: "fade-in 0.5s ease-out" }} // Custom animation
    >
      <h3 className="text-2xl font-semibold mb-6 text-center text-green-700">
        {locationName}
      </h3>

      {/* Date Field */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-green-700">
          Date
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 transition-all"
          required
        />
      </div>

      {/* Wooden Pallets */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-green-700">
          Wooden Pallets (kg)
        </label>
        <input
          type="number"
          name="woodenPallets"
          value={formData.woodenPallets}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 transition-all"
          placeholder="Enter weight in kg"
        />
      </div>

      {/* Firewood */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-green-700">
          Firewood (kg)
        </label>
        <input
          type="number"
          name="firewood"
          value={formData.firewood}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 transition-all"
          placeholder="Enter weight in kg"
        />
      </div>

      {/* Diesel */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-green-700">
          Diesel (litres)
        </label>
        <input
          type="number"
          name="diesel"
          value={formData.diesel}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 transition-all"
          placeholder="Enter litres"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-300 text-black py-3 rounded-lg font-semibold hover:bg-green-800 hover:text-white transform transition-all hover:scale-105 shadow-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ResourceForm;
