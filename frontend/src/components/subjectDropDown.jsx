import React from 'react';

const SubjectDropDown = ({ options, handleChange,check }) => {
  function AllSelect(){
    if(check)
      return(
        <option key={"0"} value={""}>
            Tất cả
        </option>
      )
    return
  }

  return (
    <select onChange={handleChange}>
      {options.map(option => (
        <option key={option.subjectID} value={option.subjectID}>
          {option.subjectName}
        </option>
      ))}
      <AllSelect></AllSelect>
    </select>
  );
};

export default SubjectDropDown;
