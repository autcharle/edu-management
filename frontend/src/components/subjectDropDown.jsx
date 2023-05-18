import React from 'react';

const SubjectDropDown = ({ options, handleChange }) => {
  return (
    <select onChange={handleChange}>
      {options.map(option => (
        <option key={option.subjectID} value={option.subjectID}>
          {option.subjectName}
        </option>
      ))}
      <option key={"0"} value={""}>
          Tất cả
        </option>
    </select>
  );
};

export default SubjectDropDown;
