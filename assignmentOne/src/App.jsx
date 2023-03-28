import './App.css'
import Navbar from './components/navbar'
import Cardlist from './components/Cardlist'
import Search from './components/Search'
import React, { useState, useEffect } from 'react'

import axios from 'axios'
function App() {
  const [data, setdata] = useState('')
  const [moviedata, setmoviedata] = useState([])
  const handleChange = (e) => {
    setdata(e.target.value)
  }
  const url = `http://www.omdbapi.com/?apikey=e17468a3&s=${data}`
  useEffect(() => {
    const movieapi = async () => {
      const response = axios
        .get(url)
        .then((response) => {
          console.log(response.data)
          setmoviedata(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    movieapi()
  }, [data])

  const [selectedvalue, setselectedvalue] = useState('')
  const filterseries = (e) => {
    const datavalue = e.target.value
    console.log(datavalue)
    setselectedvalue(datavalue)
    console.log(selectedvalue)
    // const filterseriesdata = moviedata.filter((e) => {

    // })
    // console.log(filterseriesdata)
  }
  const filterdate = () => {
    console.log('filterdate')
  }

  return (
    <>
      <Navbar />
      <div className="movie-heading">
        <h1>Movie Website</h1>
      </div>

      <Search value={data} handleChange={handleChange}></Search>
      <div className="filter-data">
        <div className="type">
          <p>Movie-Type</p>
          <select
            name=""
            id=""
            value={selectedvalue}
            style={{ marginTop: '10px' }}
            onChange={filterseries}
          >
            <option value="">Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="date">
          <p>Movie-Date</p>
          <select
            name=""
            id=""
            style={{ marginTop: '10px' }}
            onChange={filterdate}
          >
            <option value="" disabled>
              Date
            </option>
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      <Cardlist responsedata={moviedata} searchvalue={data} />
    </>
  )
}

export default App
