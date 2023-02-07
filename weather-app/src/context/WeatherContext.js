import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState({});

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>

};

export const useData = () => useContext(WeatherContext);