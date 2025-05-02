import "./Booking.css";
import PropTypes from "prop-types";


const BookingEdit = ({ bookings, onDeleteBooking, onUpdateBooking }) => {
  const handleStatusChange = (id, newStatus) => {
    onUpdateBooking(id, newStatus);
  };

  return (
    <div className="booking-container">
      <h1>Edit / Delete Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <h3>{booking.customerName}</h3>
              <p><strong>Vehicle:</strong> {booking.vehicle}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <div className="edit-actions">
                <select
                  value={booking.status}
                  onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <button onClick={() => onDeleteBooking(booking.id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingEdit;
BookingEdit.propTypes = {
    bookings: PropTypes.array.isRequired,          // array of bookings
    onDeleteBooking: PropTypes.func.isRequired,     // function
    onUpdateBooking: PropTypes.func.isRequired      // function
  };
  