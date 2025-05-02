import { useState } from "react";
import PropTypes from "prop-types";
import "./AddDriver.css";

const AddDriver = ({ onDriverAdded }) => {
  const [driverDetails, setDriverDetails] = useState({
    name: "",
    licenseNumber: "",
    contact: "",
    vehicleType: "",
  });

  const [drivers, setDrivers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriverDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDriver = { ...driverDetails, id: Date.now() };
    setDrivers((prevDrivers) => [...prevDrivers, newDriver]);
    onDriverAdded(newDriver); // Pass new driver to the parent

    setDriverDetails({ name: "", licenseNumber: "", contact: "", vehicleType: "" });
  };

  return (
    <div className="add-driver-container">
      <h2 className="add-driver-title">Add New Driver</h2>
      <form onSubmit={handleSubmit} className="add-driver-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={driverDetails.name}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </label>
        <label>
          License Number:
          <input
            type="text"
            name="licenseNumber"
            value={driverDetails.licenseNumber}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={driverDetails.contact}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </label>
        <label>
          Vehicle Type:
          <select
            name="vehicleType"
            value={driverDetails.vehicleType}
            onChange={handleInputChange}
            required
            className="form-input"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Bike">Bike</option>
          </select>
        </label>

        <button type="submit" className="submit-btn">Add Driver</button>
      </form>

      {/* Dynamic Table */}
      <div className="drivers-table-container">
        {drivers.length > 0 && (
          <table className="driver-info-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>License Number</th>
                <th>Contact</th>
                <th>Vehicle Type</th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.id}>
                  <td>{driver.name}</td>
                  <td>{driver.licenseNumber}</td>
                  <td>{driver.contact}</td>
                  <td>{driver.vehicleType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

AddDriver.propTypes = {
  onDriverAdded: PropTypes.func.isRequired,
};

export default AddDriver;
