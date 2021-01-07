import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newSearchWord, setNewSearchWord] = useState('')

  const handleSearchChange = (event) => {
    setNewSearchWord(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const matchingCountries = countries.filter(
    country => country.name.toLowerCase().includes(newSearchWord.toLowerCase())
  )

  return (
    <div>
      <form>
        <div>
          find countries <input value={newSearchWord} onChange={handleSearchChange} />
        </div>

        <Countries countries={matchingCountries} />

      </form>
    </div>

  )

}

export default App