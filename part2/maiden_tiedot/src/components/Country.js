import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    return (
        <div>
            <h1>
                {country.name}
            </h1>
            <br />
            capital {country.capital}
            <br />
            population {country.population}
            <h2>
                languages
            </h2>
            <br />
            {country.languages.map(l => <ul key={l.name}><li key={l.name}>{l.name}</li></ul>)}
            <br />
            <img src={country.flag} alt="flag of the country" width='200' height='100' />

            <Weather capital={country.capital} />
        </div>
    )
}

export default Country