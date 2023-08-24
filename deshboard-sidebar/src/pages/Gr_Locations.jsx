// import React, { useState } from 'react';
// import ImageDisplay from './ImageDisplay'; // Assuming ImageDisplay.js is in the same directory

// function Gr_Locations() {
//     const [selectedImages, setSelectedImages] = useState([]);
//     const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//     const [thumbnails, setThumbnails] = useState([]);
//     const fileSelectedHandler = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const newImage = {
//                 name: file.name,
//                 url: URL.createObjectURL(file),
//             };
//             setSelectedImages([...selectedImages, newImage]);
//         }
//     };

//     const fileUploadHandler = (e) => {
//         // Handle any additional upload logic here

//         // For demonstration purposes, you can create a thumbnail here
//         const thumbnail = selectedImages[selectedImages.length - 1].url;
//         const thumbnailName = selectedImages[selectedImages.length - 1].name;

//         // Assuming you have a separate state for storing thumbnails
//         setThumbnails([...thumbnails, { name: thumbnailName, url: thumbnail }]);
//     };

//     const handleImageClick = (index) => {
//         setSelectedImageIndex(index);
//     };

//     return (
//         <div>
//             <div>
//                 <input
//                     type="file"
//                     id="actual-btn"
//                     onChange={fileSelectedHandler}
//                     name="filename"
//                     className='label1'
//                 />
//                 <button onClick={fileUploadHandler}>Upload</button>
//             </div>
//             <div style={{ display: 'flex' }}>
//                 <div style={{ flex: 1 }}>
//                     {selectedImages.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image.url}
//                             alt={image.name}
//                             style={{ maxWidth: '100%', cursor: 'pointer' }}
//                             onClick={() => handleImageClick(index)}
//                         />
//                     ))}
//                 </div>
//                 <div style={{ flex: 1 }}>
//                     {selectedImageIndex !== null && (
//                         <ImageDisplay
//                             image={selectedImages[selectedImageIndex].url}
//                             imageName={selectedImages[selectedImageIndex].name}
//                         />
//                     )}

//                     <h2>Thumbnail Images</h2>
//                     <ul>
//                         {thumbnails.map((thumbnail, index) => (
//                             <li key={index}>
//                                 <img
//                                     src={thumbnail.url}
//                                     alt={thumbnail.name}
//                                     style={{ maxWidth: '50px', marginRight: '10px' }}
//                                 />
//                                 {thumbnail.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Gr_Locations;

// import React, { useState } from 'react';

// import ThumbnailList from './ThumbnailList';
// import Parking from './Parking';

// function App() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploadedImages, setUploadedImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const imageUrl = e.target.result;
//         setUploadedImages([...uploadedImages, imageUrl]);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleThumbnailClick = (index) => {
//     setSelectedImage(uploadedImages[index]);
//   };

//   return (
//     <div className="app-container">
//       <ThumbnailList
//         uploadedImages={uploadedImages}
//         handleThumbnailClick={handleThumbnailClick}
//       />
//       <Parking selectedImage={selectedImage} />
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';


// function Gr_locations() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [uploadedImages, setUploadedImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const imageUrl = e.target.result;
//         setUploadedImages([...uploadedImages, imageUrl]);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleThumbnailClick = (index) => {
//     setSelectedImage(uploadedImages[index]);
//   };

//   return (
//     <div className="app-container">
//       <div className="sidebar">
//         <h2>Uploaded Thumbnails</h2>
//         <input type="file" accept="image/*" onChange={handleImageUpload} />
//         <div className="thumbnail-list">
//           {uploadedImages.map((image, index) => (
//             <div
//               key={index}
//               className="thumbnail"
//               onClick={() => handleThumbnailClick(index)}
//             >
//               <img src={image} alt={`Thumbnail ${index}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="main-panel">
//         {selectedImage ? (
//           <img src={selectedImage} alt="Selected" />
//         ) : (
//           <p>Select a thumbnail to display here</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Gr_locations;




// Working Code 

import React, { useState } from 'react';
import ThumbnailList from './ThumbnailList';
import Parking from './Parking';

function Gr_locations() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setUploadedImages([...uploadedImages, imageUrl]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThumbnailClick = (image) => { // Change the parameter to image URL
    setSelectedImage(image); // Set the selected image URL
  };

  return (
    <div className="app-container">
      <ThumbnailList
        uploadedImages={uploadedImages}
        handleThumbnailClick={handleThumbnailClick}
        handleImageUpload={handleImageUpload}
      />
      <Parking selectedImage={selectedImage} />
    </div>
  );
}

export default Gr_locations;
