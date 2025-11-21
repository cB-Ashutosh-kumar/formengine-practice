import React from 'react'

const SearchInputComp = ({ placeholder, onSearch }) => {
  return (
    <input
      style={{width:"100%",padding:"6px 4px"}}
      type='text'
      placeholder={placeholder}
      onChange={(e) => { onSearch(e.target.value) }}
    />
  )
}

export default SearchInputComp
