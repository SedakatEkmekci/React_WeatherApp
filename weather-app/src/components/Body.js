import React from 'react';
import { useData } from '../Context/WeatherContext';



function Body() {
    const { data, setData } = useData();
    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">

                    {data.main ? <h1>{data.main.temp.toFixed()}°C </h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].description}</p> : null}
                    {data.weather ? <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} /> : null}
                </div>


            </div>
            {
                data.name != undefined &&
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C </p> : null}
                        <p >Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold'>{data.main.humidity} </p> : null}
                        <p >Humidity</p>
                    </div>
                    <div className="wind">
                        {data.main ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
            }

        </div >



    )
}

export default Body
