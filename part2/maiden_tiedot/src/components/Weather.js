import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [dataOfWeather, setData] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get('http://api.weatherstack.com/current'
                + '?access_key=' + api_key
                + '&query=' + capital)
            .then(response => {
                setData(response.data.current)
            })
    }, [])

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <b> temperature: </b>{dataOfWeather.temperature}
            <br />
            <img src={dataOfWeather.weather_icons} alt="icon of weather" width='100' height='100' />
            <br />
            <b>wind: </b> {dataOfWeather.wind_speed} mph direction {dataOfWeather.wind_dir}
        </div>
    )
}

export default Weather