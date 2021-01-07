import React from 'react'
import Country from './Country'


const Countries = ({ countries }) => {

    return (
        <div>
            {countries.length === 0 &&
                <ul> No matches with that filter </ul>}

            {countries.length === 1 &&
                <Country country={countries[0]} />}

            {countries.length > 1 && countries.length <= 10 &&
                countries.map(c => <ul>{c.name}</ul>)}

            {countries.length > 10 &&
                <ul> Too many matches, specify another filter </ul>}

        </div>
    )
}

export default Countries