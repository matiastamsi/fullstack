import React from 'react'
import Country from './Country'

const Countries = ({ countries, setNewSearchWord }) => {

    return (
        <div>
            {countries.length === 0 &&
                <ul> No matches with that filter </ul>}

            {countries.length === 1 &&
                <Country key={countries[0].name} country={countries[0]} />}

            {countries.length > 1 && countries.length <= 10 &&
                countries.map(function (c) {
                    return (
                        <div key={c.name}>
                            {c.name} <button onClick={() =>
                                setNewSearchWord(c.name)}>show</button>
                        </div>
                    )
                })
            }


            {countries.length > 10 &&
                <ul> Too many matches, specify another filter </ul>}

        </div>
    )
}

export default Countries