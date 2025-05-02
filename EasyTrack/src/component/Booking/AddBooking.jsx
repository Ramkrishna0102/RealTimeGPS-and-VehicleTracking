// AddBooking.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBooking.css";
import PropTypes from "prop-types";

const AddBooking = ({ onBookingAdded }) => {
  const [customerName, setCustomerName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleType, setVehicleType] = useState("Car");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [destination, setDestination] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Unpaid");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate(); // Use the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new booking object
    const newBooking = {
      id: Date.now(), // Simple way to generate a unique ID
      customerName,
      vehicle,
      vehicleType,
      date,
      status,
      destination,
      paymentStatus,
      paymentMethod,
      notes
    };

    // Add the booking to the parent component state
    onBookingAdded(newBooking);

    // Navigate to the Bookings Information page
    navigate("/bookings-info");

    // Optionally, reset the form fields
    setCustomerName("");
    setVehicle("");
    setVehicleType("Car");
    setDate("");
    setStatus("Pending");
    setDestination("");
    setPaymentStatus("Unpaid");
    setPaymentMethod("Credit Card");
    setNotes("");
  };

  return (
    <div className="add-booking-container">
      <h1 className="add-booking-title">Add Booking</h1>
      <form onSubmit={handleSubmit} className="add-booking-form">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          className="form-input"
          required
        />
        
        {/* Vehicle Type Dropdown */}
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="form-input"
        >
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Bike">Bike</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-input"
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="form-input"
          required
        />
        
        {/* Payment Status Dropdown */}
        <select
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          className="form-input"
        >
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>

        {/* Payment Method Dropdown */}
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="form-input"
        >
          <option value="Credit Card">Credit Card</option>
          <option value="Cash">Cash</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <textarea
          placeholder="Additional Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="form-textarea"
        />

        <button type="submit" className="submit-btn">
          Add Booking
        </button>
      </form>
    </div>
  );
};

export default AddBooking;


AddBooking.propTypes = {
    onBookingAdded: PropTypes.func.isRequired
  };
  


