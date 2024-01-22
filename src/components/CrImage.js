import React from 'react';
import logo from '../logo.svg';
import optionsData from '../assets/data.json';


const CrImage = ({ crimini, electedCriminiIndex, clipPathValue }) => {

  return (
    <div>
      <img src={crimini}
      className="App-logo"
      alt="Criminal"
      style={{
        objectFit: 'cover',
        clipPath: clipPathValue }}/>
      <h1> What Did They Do?</h1>
    </div>
  );
};

export default CrImage;


// // CrImage.js
// import React from 'react';

// const CrImage = ({ crimini, selectedCriminiIndex, clipPathValue }) => {
//   return (
//     <div>
//       <img
//         src={crimini[selectedCriminiIndex].image_url}
//         alt="Criminal"
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover',
//           clipPath: clipPathValue,
//         }}
//       />
//       <h1> What Did They Do?</h1>
//     </div>
//   );
// };

// export default CrImage;
