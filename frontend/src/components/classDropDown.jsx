import React from 'react';

const ClassDropDown = ({ options, handleChange ,check}) => {
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
      <AllSelect></AllSelect>
      {options.map(option => (
        <option key={option.classID} value={option.classID}>
          {option.classID}
        </option>
      ))}
    </select>
  );
};

export default ClassDropDown;

