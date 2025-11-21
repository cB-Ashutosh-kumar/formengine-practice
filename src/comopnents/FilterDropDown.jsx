import React from 'react'

const FilterDropDown = ({ options, onFilter }) => {
  return (
    <select onChange={(e) => onFilter(e.target.value)} >
      <option value="" selected>All</option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))
      }

    </select>
  )
}

export default FilterDropDown
