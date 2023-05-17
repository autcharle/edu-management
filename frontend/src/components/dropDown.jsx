import React from 'react';

const Dropdown = ({ options, handleChange }) => {
  return (
    <select onChange={handleChange}>
      {options.map(option => (
        <option key={option.classID} value={option.classID}>
          {option.classID}
        </option>
      ))}
      <option key={"0"} value={""}>
          Tất cả
        </option>
    </select>
  );
};

export default Dropdown;

