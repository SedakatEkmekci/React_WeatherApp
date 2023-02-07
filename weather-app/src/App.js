import { WeatherProvider } from './Context/WeatherContext';
import Search from './components/Search';
import Body from './components/Body';

function App() {





  return (
    <div className="app">
      <WeatherProvider>
        <div className="search">
          <Search />
        </div>
        <div className="container">
          <Body></Body>

        </div>
      </WeatherProvider>
    </div>


  )
}


export default App;
