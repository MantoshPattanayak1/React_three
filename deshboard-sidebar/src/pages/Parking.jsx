import React from 'react';

function Parking({ selectedImage }) {
  return (
    <div className="main-panel">
      {selectedImage ? (
        <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
      ) : (
        <p>Select a thumbnail to display here</p>
      )}
    </div>
  );
}

export default Parking;