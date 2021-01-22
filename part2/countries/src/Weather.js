import React, {useEffect, useState} from "react";
import axios from "axios";

const Weather = (props) => {
    const [weather, setWeather] = useState([{}])
    const WEATHER_URL = "http://api.weatherstack.com/current"
    const WEATHER_PARAMS = "?access_key=6c267428b5559969eb7b5b01207e54ce&query="


    useEffect(() => {
        axios.get(WEATHER_URL + WEATHER_PARAMS+ props.city).then(response => {
            setWeather(response.data)
        }).catch(response => console.log(response))
    }, [props.city])

    return (
        <div>
            {weather.current ? <div>
                <h2>Weather In {props.city} </h2>
                <b>Temperature:</b> <p>
                {weather.current.temperature} Celsius
            </p>
                <img src={weather.current.weather_icons[0]}  alt={"weather_icon"}/>
                <br />
                <b>Wind:</b>
                <p>{weather.current.wind_speed} mph {weather.current.wind_dir}</p>
            </div> : undefined}
        </div>
    )
}
export default Weather;