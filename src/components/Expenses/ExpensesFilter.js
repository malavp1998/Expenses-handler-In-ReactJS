import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  console.log(props.years);
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const setYears = [...new Set(props.years)];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {setYears.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
