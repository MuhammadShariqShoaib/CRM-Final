import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";

export default function Dashboard() {
  const [metrics, setMetrics] = useState([
    { id: 1, name: "Total Employee", value: 0 },
    { id: 2, name: "Total Clients", value: 0 },
    { id: 3, name: "Total Connections", value: 0 },
  ]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchMetrics = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/countDocuments"); 
        if (response.ok) {
          const data = await response.json();
          // Update metrics state with the fetched data
          setMetrics([
            { id: 1, name: "Total Employee", value: data.totalEmployees },
            { id: 2, name: "Total Clients", value: data.totalClients },
            { id: 3, name: "Total Connections", value: data.totalConnections },
          ]);
        } else {
          console.error("Failed to fetch metrics:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics(); // Call the fetch function when the component mounts
  }, []);

  return (
    <Layout>
      <div>
        <div className="p-8 h-screen bg-gray-100">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {metrics.map((metric) => (
              <div key={metric.id} className="p-4 bg-white rounded shadow">
                <h3 className="text-lg font-semibold">{metric.name}</h3>
                <p className="text-2xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
