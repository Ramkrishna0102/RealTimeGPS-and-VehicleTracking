// BookingInfo.jsx
import PropTypes from "prop-types";
const BookingInfo = ({ bookings }) => {
    return (
      <div className="booking-container">
        <h1>Booking Information</h1>
        {bookings.length === 0 ? (
          <p>No bookings yet!</p>
        ) : (
          <div className="booking-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <h3>{booking.customerName}</h3>
                <p><strong>Vehicle:</strong> {booking.vehicle}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  

  
BookingInfo.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      vehicle: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookingInfo;
