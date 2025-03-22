import React from 'react';
import Table from '../Components/Table.jsx';
import { useState, useEffect } from 'react';
import { getLanes } from '../Components/api.js';

function Home() {
  const [lanes, setLanes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadLanes = async () => {
      try {
        const lanes = await getLanes(); 
        console.log("Fetched data:", lanes); // ✅ Log the data here
        if (!lanes || lanes.length === 0) {
          setError("No data available");
        } else {
          setLanes(lanes);
        }
      } catch (error) {
        setError("Error loading data");
        console.error("API Error:", error);
      } finally {
        setLoading(false);
        console.log('done');
      }
    };
  
    loadLanes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div >
      <Table lanes={lanes} />
    </div>
  );
}

export default Home;
