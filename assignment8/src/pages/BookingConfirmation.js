import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation() {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state || {};

  return (
    <div className="confirmation">
      <h1>Seat Booked Successfully</h1>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
    </div>
  );
}

export default BookingConfirmation;
