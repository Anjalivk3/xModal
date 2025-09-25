import React, { useState } from 'react';
import XModal from './components/XModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <button onClick={openModal}>Open Form</button>
      {isModalOpen && <XModal onClose={closeModal} />}
    </div>
  );
};

export default App;