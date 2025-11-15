import React, { useEffect, useState } from "react";
import axios from "axios";

const citiesAQIList = [
  "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata",
  "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Surat"
];

// Helper to map AQI value to category and color
const getAqiCategory = (aqi) => {
  if (aqi === undefined || aqi === null) return { label: "Unknown", color: "#9CA3AF" };
  if (aqi <= 50) return { label: "Good", color: "#10B981" };
  if (aqi <= 100) return { label: "Moderate", color: "#FBBF24" };
  if (aqi <= 150) return { label: "Unhealthy Sensitive", color: "#F97316" };
  if (aqi <= 200) return { label: "Unhealthy", color: "#DC2626" };
  if (aqi <= 300) return { label: "Very Unhealthy", color: "#9333EA" };
  return { label: "Hazardous", color: "#7C2D12" };
};

const LiveAqiPanel = () => {
  const [aqiData, setAqiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "d5ffda5dbaf412d9a268b3b28891caa07b537239";

    const fetchAqiData = async () => {
      try {
        const results = await Promise.all(
          citiesAQIList.map(async (city) => {
            const { data } = await axios.get(
              `https://api.waqi.info/feed/${city}/?token=${API_KEY}`
            );
            return {
              city,
              aqi: data.data?.aqi,
              category: getAqiCategory(data.data?.aqi),
            };
          })
        );
        setAqiData(results);
      } catch (error) {
        console.error("Error fetching AQI data:", error);
        setAqiData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAqiData();

    const intervalId = setInterval(fetchAqiData, 10 * 60 * 1000); // refresh every 10 minutes
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading AQI data...</p>;
  if (!aqiData.length) return <p className="text-center text-red-600">Failed to load AQI data.</p>;

  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">🌆 Live Air Quality Index - Top Cities</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {aqiData.map(({ city, aqi, category }) => (
          <div key={city} className="border rounded p-3 flex flex-col items-center">
            <h3 className="font-semibold text-lg">{city}</h3>
            <p className="text-2xl font-bold" style={{ color: category.color }}>
              {aqi !== undefined && aqi !== null ? aqi : "N/A"}
            </p>
            <span className="text-sm font-medium" style={{ color: category.color }}>
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveAqiPanel;
