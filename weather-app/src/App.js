import { WeatherProvider } from './Context/WeatherContext';
import Search from './components/Search';

function App() {





  return (
    <div className="app">
      <WeatherProvider>
        <div className="search">
          <Search />
        </div>
        <div className="container">

        </div>
      </WeatherProvider>
    </div>


  )
}


export default App;
