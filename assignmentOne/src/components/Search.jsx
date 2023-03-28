import React, { useState, useEffect } from 'react'
import './search.css'

const Search = (props) => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={props.value}
          onChange={props.handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </div>
    </>
  )
}

export default Search
