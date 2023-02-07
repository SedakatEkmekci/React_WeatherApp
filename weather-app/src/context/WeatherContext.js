import { createContext, useContext, useState } from "react";


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState({});
    const values = { data, setData }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

};

export const useData = () => useContext(WeatherContext);