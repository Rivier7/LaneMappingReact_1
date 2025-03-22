import { useParams, useLocation } from 'react-router-dom';
import './edit.css';

const Edit = () => {
  const { laneId } = useParams(); // ✅ Retrieve laneId from URL
  const location = useLocation();
  const lane = location.state?.lane; // ✅ Retrieve full lane object

  if (!lane) {
    return <h1>Error: No lane data found</h1>;
  }

  return (
    <div className='editcontainer'>
      <h1>Edit Lane {laneId}</h1>
      <form>
        <label>
          Account Name:
          <input
            type="text"
            defaultValue={lane.accountName}
            onChange={(e) => (lane.accountName = e.target.value)}
          />
        </label>
        <br />
        <label>
          Origin City:
          <input
            type="text"
            defaultValue={lane.originCity}
            onChange={(e) => (lane.originCity = e.target.value)}
          />
        </label>
        <br />
        <label>
          Destination City:
          <input
            type="text"
            defaultValue={lane.destinationCity}
            onChange={(e) => (lane.destinationCity = e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={() => console.log('Updated lane:', lane)}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edit;
