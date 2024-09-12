import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div className="booking-container" id="Booking">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Book a Table</h1>
      <form
        id="booking-form"
        action="https://formsubmit.co/mariadufna@email.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New Booking Request" />
        <input type="hidden" name="_next" value="/thank-you" /> 
        
        <label className="p__opensans" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label className="p__opensans" htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label className="p__opensans" htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <label className="p__opensans" htmlFor="date">Day:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        
        <label className="p__opensans" htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        
        <label className="p__opensans" htmlFor="guests">Number Of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          min="1"
        />
        
        <label className="p__opensans" htmlFor="special-requests">Comment:</label>
        <textarea
          id="special-requests"
          name="specialRequests"
          rows="4"
          value={formData.specialRequests}
          onChange={handleChange}
        ></textarea>
        
        <button type="submit" className="custom__button">Reserve Table</button>
      </form>
    </div>
  );
};

export default Booking;
