import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './edit.css';
import { updateLane } from '../Components/api';

const Edit = () => {

  const { laneId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const lane = location.state?.lane;

  if (!lane) {
    return <h1>Error: No lane data found</h1>;
  }

  const [updatedLane, setUpdatedLane] = useState({});

  useEffect(() => {
    if (lane) {
      setUpdatedLane({ ...lane });
    }
  }, [lane]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedLane((prevLane) => ({
      ...prevLane,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log('Updated Lane:', updatedLane);
    console.log('Lane ID:', updatedLane.id);



    try {
      await updateLane(updatedLane.id, updatedLane);
      alert('Lane updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating lane:', error.message);
      alert('Failed to update lane.');
    }
  };

  return (
    <div className='editcontainer'>
      <h1>Edit Lane {laneId}</h1>

      <form>
        {/* Display only fields that should not be edited */}
        <p><strong>Account Name:</strong> {updatedLane.accountName}</p>
        <p><strong>Origin City:</strong> {updatedLane.originCity}</p>
        <p><strong>Origin State:</strong> {updatedLane.originState}</p>
        <p><strong>Origin Country:</strong> {updatedLane.originCountry}</p>
        <p><strong>Destination City:</strong> {updatedLane.destinationCity}</p>
        <p><strong>Destination State:</strong> {updatedLane.destinationState}</p>
        <p><strong>Destination Country:</strong> {updatedLane.destinationCountry}</p>
        <p><strong>Item Number:</strong> {updatedLane.itemNumber}</p>
        <p><strong>Option:</strong> {updatedLane.options}</p>

        {/* Editable Fields */}
        <div className='editform'>
          <label>Service or Flight: <input type="text" name="serviceOrFlight" value={updatedLane.serviceOrFlight || ''} onChange={handleChange} /></label>
          <label>Flight Operating Days Collection: <input type="text" name="flightOperatingDaysCollection" value={updatedLane.flightOperatingDaysCollection || ''} onChange={handleChange} /></label>
          <label>Cut-Off Time: <input type="text" name="cutOffTime" value={updatedLane.cutOffTime || ''} onChange={handleChange} /></label>
          <label>Origin Station: <input type="text" name="originStation" value={updatedLane.originStation || ''} onChange={handleChange} /></label>
          <label>Departure Time: <input type="text" name="departureTime" value={updatedLane.departureTime || ''} onChange={handleChange} /></label>
          <label>Arrival Time Transit: <input type="text" name="arrivalTimeTransit" value={updatedLane.arrivalTimeTransit || ''} onChange={handleChange} /></label>
          <label>Transit Station Airport: <input type="text" name="transitStationAirport" value={updatedLane.transitStationAirport || ''} onChange={handleChange} /></label>
          <label>Flight Operating Days Transit: <input type="text" name="flightOperatingDaysTransit" value={updatedLane.flightOperatingDaysTransit || ''} onChange={handleChange} /></label>
          <label>Connection Flight Number: <input type="text" name="firstFlightNumber" value={updatedLane.firstFlightNumber || ''} onChange={handleChange} /></label>
          <label>Connection Departure Time: <input type="text" name="connectionDepartureTime" value={updatedLane.connectionDepartureTime || ''} onChange={handleChange} /></label>
          <label>Connection Arrival Time: <input type="text" name="connectionArrivalTime" value={updatedLane.connectionArrivalTime || ''} onChange={handleChange} /></label>
          <label>Destination Airport: <input type="text" name="destinationAirport" value={updatedLane.destinationAirport || ''} onChange={handleChange} /></label>
          <label>Delivery To Consignee Duration: <input type="text" name="deliveryToConsigneeDuration" value={updatedLane.deliveryToConsigneeDuration || ''} onChange={handleChange} /></label>
          <label>Actual Delivery Time Based on Receiving: <input type="text" name="actualDeliveryTimeBasedOnReceiving" value={updatedLane.actualDeliveryTimeBasedOnReceiving || ''} onChange={handleChange} /></label>
          <label>TAT to Consignee Duration: <input type="text" name="tatToConsigneeDuration" value={updatedLane.tatToConsigneeDuration || ''} onChange={handleChange} /></label>
          <label>Additional Notes: <textarea name="additionalNotes" value={updatedLane.additionalNotes || ''} onChange={handleChange} /></label>
        </div>

        {/* Submit and Cancel Buttons */}
        <button type="button" onClick={handleSubmit}>Save Changes</button>
        <button type="button" className='cancel-button' onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default Edit;
