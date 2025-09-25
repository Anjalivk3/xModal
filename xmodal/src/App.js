import React, { useState } from 'react';
import Modal from './Component/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default App;