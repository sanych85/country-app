import React from "react";
import {SelectWrapper,StyledSelect} from "./Select.style"

const Select = ({ dataArray,selectSomething,optionsData }) => {
  const getOptions = (dataArray) => {
 
    if (dataArray) {

      const options = optionsData.map((data, index) => (
        <option value={data} key={index} >
          {data}
        </option>
      ));
      return options;
    } else {
      return;
    }
  };



  return (
    <SelectWrapper>
      <StyledSelect name="selectCountry" id="selectCountry" onChange = {(e)=>selectSomething(e.target.value)}>
        <option>Choose region</option>
        <option value = "all">All</option>
        {getOptions(dataArray)}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;

// <select name="select"> <!--Supplement an id here instead of using 'name'-->
//   <option value="value1">Значение 1</option>
//   <option value="value2" selected>Значение 2</option>
//   <option value="value3">Значение 3</option>
// </select>
