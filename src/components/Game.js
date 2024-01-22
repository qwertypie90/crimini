// // HideImagePortion.js
// import React, { useState } from 'react';

// const HideImagePortion = ({ imageUrl }) => {
//   const [clipPathValue, setClipPathValue] = useState('polygon(0 0, 100% 0, 100% 70%, 0% 100%)');

//   const handleButtonClick = () => {
//     setClipPathValue((prevValue) =>
//       prevValue === 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)'
//         ? 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)'
//         : 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)'
//     );
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Toggle Hidden Portion</button>
//       <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
//         <img
//           src={imageUrl}
//           alt="Your Image"
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             clipPath: clipPathValue,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default HideImagePortion;
