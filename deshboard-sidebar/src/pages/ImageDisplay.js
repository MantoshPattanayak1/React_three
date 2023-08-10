import React from 'react';

function ImageDisplay({ image }) {
    return (
        <div>
            <h2>Uploaded Image</h2>
            <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
    );
}

export default ImageDisplay;