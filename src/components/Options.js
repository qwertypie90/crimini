import React from 'react';

const Options = ({ correctCrimeIndex, handleRefChange, crimini }) => {
  const { crimes, correct_crime_index } = crimini;

  return (
    <div>
      <ul>
        {crimes.map((crime, index) => (
          <li key={index} onChange={() => handleRefChange(index, correctCrimeIndex)} className={index === correctCrimeIndex ? 'correct-crime' : ''}>
            <label>
              <input type="checkbox" />
              {crime}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
