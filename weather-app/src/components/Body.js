import React from 'react';
import { useData } from '../Context/WeatherContext';

function Body() {
    const { data, setData } = useData();
    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{data.name}</p> {/*display selected city name */}
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null} {/*display temperature */}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null} {/*display description */}
                </div>
            </div>
            <div>
                <h1>Something</h1>
            </div>

        </div>

    )
}

export default Body
