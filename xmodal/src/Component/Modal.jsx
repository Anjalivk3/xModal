import React, { useState, useEffect, useRef } from 'react';

const Modal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const modalRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert('Please fill out all fields.');
      return;
    }

    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const selectedDate = new Date(dob);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }

    // If all validations pass, close modal
    onClose();
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input id="username" value={formData.username} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input id="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input id="dob" type="date" value={formData.dob} onChange={handleChange} />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;