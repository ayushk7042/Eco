
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EmissionCalculator = () => {
  const [vehicleType, setVehicleType] = useState("car");
  const [fuelType, setFuelType] = useState("petrol");
  const [vehicleAge, setVehicleAge] = useState(5);
  const [distance, setDistance] = useState(10); // km/day

  const [electricityUsage, setElectricityUsage] = useState(3);
  const [electricityType, setElectricityType] = useState("home");

  const [foodType, setFoodType] = useState("meat");
  const [foodDays, setFoodDays] = useState(7);

  const [result, setResult] = useState(null);
  const [tips, setTips] = useState([]);

  const fuelEmissionFactors = {
    petrol: 2.31,
    diesel: 2.68,
    cng: 1.51,
    electric: 0.5, // approx for EV (indirect grid)
  };

  const vehicleTypeFactor = {
    car: 1,
    truck: 2,
    bike: 0.6,
  };

  const electricityTypeFactor = {
    home: 1,
    shop: 1.4,
    industry: 2.2,
  };

  const foodTypeFactor = {
    meat: 3.5,
    vegetarian: 2.0,
    vegan: 1.5,
  };

  const calculateEmission = async () => {
    const transportEmission =
      distance *
      fuelEmissionFactors[fuelType] *
      vehicleTypeFactor[vehicleType] *
      (1 + vehicleAge * 0.01);

    const energyEmission =
      electricityUsage * electricityTypeFactor[electricityType];

    const foodEmission = foodTypeFactor[foodType] * foodDays;

    const total = transportEmission + energyEmission + foodEmission;

    setResult(total.toFixed(2));

    const suggestions = [];
    if (fuelType === "diesel") suggestions.push("💡 Switch from diesel to CNG or electric.");
    if (vehicleAge > 10) suggestions.push("🛠️ Old vehicle? Consider upgrading or regular servicing.");
    if (electricityType === "industry" || energyEmission > 10) suggestions.push("⚡ High energy usage – shift to renewables.");
    if (foodType === "meat") suggestions.push("🥗 Try going vegetarian a few days per week.");
    if (total < 5) suggestions.push("🌱 Excellent! Your footprint is very low.");
    setTips(suggestions);

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/emissions/save",
        {
          transport: transportEmission.toFixed(2),
          energy: energyEmission.toFixed(2),
          food: foodEmission.toFixed(2),
          total: total.toFixed(2),
          date: new Date(),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Emission data saved!");
    } catch (err) {
      console.error(err);
      toast.error("Error saving data.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        🌍 Advanced Emission Calculator
      </h2>

      {/* 🚗 Vehicle Section */}
      <div className="mb-6">
        <label className="block font-semibold">Vehicle Type</label>
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="car">Car</option>
          <option value="truck">Truck</option>
          <option value="bike">Bike</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Fuel Type</label>
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="cng">CNG</option>
          <option value="electric">Electric</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-semibold">Vehicle Age (yrs)</label>
          <input
            type="number"
            value={vehicleAge}
            onChange={(e) => setVehicleAge(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Daily Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      {/* ⚡ Electricity */}
      <div className="mb-6">
        <label className="block font-semibold">Electricity Type</label>
        <select
          value={electricityType}
          onChange={(e) => setElectricityType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="home">Home</option>
          <option value="shop">Shop</option>
          <option value="industry">Industry</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Electricity Usage (kWh/day)</label>
        <input
          type="number"
          value={electricityUsage}
          onChange={(e) => setElectricityUsage(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 🍽️ Food */}
      <div className="mb-6">
        <label className="block font-semibold">Food Type</label>
        <select
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="meat">Meat</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Days of Food Consumption</label>
        <input
          type="number"
          value={foodDays}
          onChange={(e) => setFoodDays(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* ✅ Calculate Button */}
      <button
        onClick={calculateEmission}
        className="w-full py-2 mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded"
      >
        Calculate & Save
      </button>

      {/* 🔍 Results */}
      {result && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Total Emission: {result} kg CO₂
          </h3>
          <ul className="list-disc list-inside text-left text-gray-700">
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmissionCalculator;


