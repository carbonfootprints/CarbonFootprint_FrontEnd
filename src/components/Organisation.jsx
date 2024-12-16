import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Organisation() {
  const [formData, setFormData] = useState({
    organizationName: "",
    siteName: "",
    registrationNumber: "",
    coordinates: "",
    address: "",
    contactPerson: "",
    email: "",
    telephone: "",
    numberOfEmployees: "",
    facilityDescription: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/save-calculator-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/next-page"); // replace with your actual route
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="infoFirstWrapper my-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg infoWrapper"
      >
        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Name of the Organisation
          </label>
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Name of the Organisation"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Site Name
          </label>
          <input
            type="text"
            name="siteName"
            value={formData.siteName}
            onChange={handleChange}
            placeholder="Site Name"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Company Registration Number
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Company Registration Number"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Geographical Coordinates
          </label>
          <input
            type="text"
            name="coordinates"
            value={formData.coordinates}
            onChange={handleChange}
            placeholder="Geographical Coordinates"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Contact Person
          </label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="Contact Person"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Telephone Number
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="Telephone Number"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Number of Employees
          </label>
          <input
            type="number"
            name="numberOfEmployees"
            value={formData.numberOfEmployees}
            onChange={handleChange}
            placeholder="Number of Employees"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <div className="mb-6">
          <label className="block text-green-800 text-sm font-bold mb-2">
            Description of the Facility
          </label>
          <textarea
            name="facilityDescription"
            value={formData.facilityDescription}
            onChange={handleChange}
            placeholder="Description of the Facility"
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Save and Continue
        </button>
      </form>
    </div>
  );
}

export default Organisation;
