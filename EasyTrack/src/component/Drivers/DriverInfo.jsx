import PropTypes from "prop-types";
import "./DriverInfo.css";

const DriverInfo = ({ drivers }) => {
  return (
    <div className="driver-info-container">
      <h2 className="driver-info-title">Driver Information</h2>
      {drivers.length === 0 ? (
        <p className="no-drivers-message">No drivers available.</p>
      ) : (
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
  );
};

DriverInfo.propTypes = {
  drivers: PropTypes.array.isRequired, // Validate that drivers is an array
};

export default DriverInfo;
