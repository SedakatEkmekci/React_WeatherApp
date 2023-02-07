import { useState } from 'react';
import { WeatherProvider } from './Context/WeatherContext';
import Search from './components/Search';

function App() {





  return (
    <WeatherProvider>
      <Search />
    </WeatherProvider>
  )
}


export default App;
