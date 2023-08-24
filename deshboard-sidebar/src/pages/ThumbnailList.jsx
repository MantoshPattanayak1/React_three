import React from 'react';

function ThumbnailList({ uploadedImages, handleThumbnailClick, handleImageUpload }) {
  return (
    <div className="sidebar">
      <h2>Uploaded Thumbnails</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div className="thumbnail-list">
        {uploadedImages.map((image, index) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => handleThumbnailClick(image)} >
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThumbnailList;