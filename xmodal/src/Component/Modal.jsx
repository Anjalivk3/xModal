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

        if (email && !email.includes('@')) {
      alert('Invalid email');
      return;
    }else if(!email){
      alert('Please fill out all fields.');
      return;
    }

    if (phone && !/^\d{10}$/.test(phone)) {
      alert('Invalid phone number');
      return;
    }else if(!phone){
      alert('Please fill out all fields.');
      return;
    }

    const selectedDate = new Date(dob);
    const currentDate = new Date();
    if (dob && selectedDate > currentDate) {
      alert('Invalid date of birth');
      return;
    }else if(!dob){
      alert('Please fill out all fields.');
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
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          
            <label htmlFor="username">Username:</label>
            <input id="username" value={formData.username} onChange={handleChange} />
          
            <label htmlFor="email">Email Address:</label>
            <input id="email" value={formData.email} onChange={handleChange} />
          
          
            <label htmlFor="phone">Phone Number:</label>
            <input id="phone" value={formData.phone} onChange={handleChange} />
          
            <label htmlFor="dob">Date of Birth:</label>
            <input id="dob" type="date" value={formData.dob} onChange={handleChange} />          
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;