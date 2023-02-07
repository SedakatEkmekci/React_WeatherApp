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
        <Body />


      </WeatherProvider>
    </div>


  )
}


export default App;
