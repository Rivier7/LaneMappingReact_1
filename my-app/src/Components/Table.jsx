import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { updateLane } from './api';

import './Table.css';

function Table({ lanes }) {
  const navigate = useNavigate(); // ✅ useNavigate inside the component

  const [searchForm, setSearchForm] = useState({
    accountName: '',
    itemNumber: '',
    options: '',
    originCountry: '',
    originState: '',
    originCity: '',
    destinationCountry: '',
    destinationState: '',
    destinationCity: '',
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const renderRows = () => {
    if (!lanes || lanes.length === 0) {
      return (
        <tr>
          <td colSpan="19">No data available</td>
        </tr>
      );
    }

    // Filter rows based on search form values
    const filteredLanes = lanes.filter((lane) => {
      return (
        (!searchForm.accountName || lane.accountName === searchForm.accountName) &&
        (!searchForm.itemNumber || lane.itemNumber === searchForm.itemNumber) &&
        (!searchForm.options || lane.options === searchForm.options) &&
        (!searchForm.originCountry || lane.originCountry === searchForm.originCountry) &&
        (!searchForm.originState || lane.originState === searchForm.originState) &&
        (!searchForm.originCity || lane.originCity === searchForm.originCity) &&
        (!searchForm.destinationCountry || lane.destinationCountry === searchForm.destinationCountry) &&
        (!searchForm.destinationState || lane.destinationState === searchForm.destinationState) &&
        (!searchForm.destinationCity || lane.destinationCity === searchForm.destinationCity)
      );
    });

    const editLane = (lane) => {
      navigate('/edit', { state: { lane } }); // ✅ Pass lane data to /edit page
    };

    return filteredLanes.map((lane, index) => (
      <tr
        key={index}
        className={lane.hasBeenUpdated ? 'highlight-yellow' : ''} // Apply highlight if updated
      >
        <td>{lane.accountName}</td>
        <td>{lane.sheet}</td>
        <td>{lane.originCity}</td>
        <td>{lane.originState}</td>
        <td>{lane.originCountry}</td>
        <td>{lane.destinationCity}</td>
        <td>{lane.destinationState}</td>
        <td>{lane.destinationCountry}</td>
        <td>{lane.itemNumber}</td>
        <td>{lane.options}</td>
        <td>{lane.serviceOrFlight}</td>
        <td>{lane.flightOperatingDaysCollection}</td>
        <td>{lane.originStation}</td>
        <td>{lane.transitStationAirport}</td>
        <td>{lane.flightOperatingDaysTransit}</td>
        <td>{lane.firstFlightNumber}</td>
        <td>{lane.destinationAirport}</td>
        <td>{lane.hasBeenUpdated ? "YES" : "NO"}</td>
        <td>{lane.lastUpdate ? new Date(lane.lastUpdate).toLocaleDateString() : "N/A"}</td>
        <td>{lane.additionalNotes}</td>
        <td>
          <button onClick={() => editLane(lane)}>edit</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="table-container">
      {/* Search Form */}
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <table>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Item Number</th>
              <th>Options</th>
              <th>Origin Country</th>
              <th>Origin State</th>
              <th>Origin City</th>
              <th>Destination Country</th>
              <th>Destination State</th>
              <th>Destination City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Account Name */}
              <td>
                <select
                  name="accountName"
                  value={searchForm.accountName}
                  onChange={handleSearchChange}
                >
                  <option value="">Select account...</option>
                  {[...new Set(lanes.map((r) => r.accountName))].map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </td>

              {/* Item Number */}
              <td>
                <select
                  name="itemNumber"
                  value={searchForm.itemNumber}
                  onChange={handleSearchChange}
                >
                  <option value="">Select item number...</option>
                  {[...new Set(lanes.map((r) => r.itemNumber))].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </td>

              {/* Options */}
              <td>
                <select
                  name="options"
                  value={searchForm.options || ''}
                  onChange={handleSearchChange}
                >
                  <option value="">Select option...</option>
                  {[...new Set(lanes.map((r) => r.options))].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </td>

              {/* Origin Country */}
              <td>
                <select
                  name="originCountry"
                  value={searchForm.originCountry}
                  onChange={handleSearchChange}
                >
                  <option value="">Select country...</option>
                  {[...new Set(lanes.map((r) => r.originCountry))].map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </td>

              {/* Origin State */}
              <td>
                <select
                  name="originState"
                  value={searchForm.originState}
                  onChange={handleSearchChange}
                >
                  <option value="">Select state...</option>
                  {[...new Set(lanes.map((r) => r.originState))].map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </td>

              {/* Origin City */}
              <td>
                <select
                  name="originCity"
                  value={searchForm.originCity}
                  onChange={handleSearchChange}
                >
                  <option value="">Select city...</option>
                  {[...new Set(lanes.map((r) => r.originCity))].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </td>

              {/* Destination Country */}
              <td>
                <select
                  name="destinationCountry"
                  value={searchForm.destinationCountry}
                  onChange={handleSearchChange}
                >
                  <option value="">Select country...</option>
                  {[...new Set(lanes.map((r) => r.destinationCountry))].map((destinationCountry) => (
                    <option key={destinationCountry} value={destinationCountry}>{destinationCountry}</option>
                  ))}
                </select>
              </td>

              {/* Destination State */}
              <td>
                <select
                  name="destinationState"
                  value={searchForm.destinationState}
                  onChange={handleSearchChange}
                >
                  <option value="">Select state...</option>
                  {[...new Set(lanes.map((r) => r.destinationState))].map((destinationState) => (
                    <option key={destinationState} value={destinationState}>{destinationState}</option>
                  ))}
                </select>
              </td>

              {/* Destination City */}
              <td>
                <select
                  name="destinationCity"
                  value={searchForm.destinationCity}
                  onChange={handleSearchChange}
                >
                  <option value="">Select city...</option>
                  {[...new Set(lanes.map((r) => r.destinationCity))].map((destinationCity) => (
                    <option key={destinationCity} value={destinationCity}>{destinationCity}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* Data Table */}
      <table>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Sheet</th>
            <th>Origin City</th>
            <th>Origin State</th>
            <th>Origin Country</th>
            <th>Destination City</th>
            <th>Destination State</th>
            <th>Destination Country</th>
            <th>Item Number</th>
            <th>Options</th>
            <th>Service or Flight</th>
            <th>Flight Operating Days Collection</th>
            <th>Origin Station</th>
            <th>Transit Station Airport</th>
            <th>Flight Operating Days Transit</th>
            <th>Transit Flight Number</th>
            <th>Destination Airport</th>
            <th>Has Been Updated</th>
            <th>Last Update</th>
            <th>Additional Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
