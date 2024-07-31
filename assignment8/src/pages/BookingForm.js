import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/confirmation', { state: { name, email, mobile } });
  };

  return (
    <div className="booking-form">
      <h2>Book Your Seat</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Mobile:
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;
