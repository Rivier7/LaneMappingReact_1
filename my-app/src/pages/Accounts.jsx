import { useEffect, useState } from "react";
import { getAllAccounts } from '../Components/api';
import './Accounts.css';


const Accounts = () => {


    const [Account, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  
  
    useEffect(() => {
      const loadAccounts = async () => {
        try {
          const Accounts = await getAllAccounts(); 
          console.log("Fetched data:", Accounts); // ✅ Log the data here
          if (!Accounts || Accounts.length === 0) {
            setError("No data available");
          } else {
            setAccounts(Accounts);
          }
        } catch (error) {
          setError("Error loading data");
          console.error("API Error:", error);
        } finally {
          setLoading(false);
          console.log('done');
        }
      };
  
      loadAccounts();  // Call the async function
  
    }, []);


    

  return (
    <div className="account-container">
      <h1>Accounts</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="account-cards">
          {Account.map((account, index) => {
            return (
              <div key={index} className="account-card" // Use the color from the backend
              >
                <div className="Account-profile" style={{ backgroundColor: account.randomColor }}></div>
                <h2 className="Account-name">{account.name}</h2>
                <button className="getExcel">download LaneMapping</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Accounts;
