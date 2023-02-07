import { WeatherProvider } from './Context/WeatherContext';
import Search from './components/Search';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <div className="search">
          <Search />
        </div>
        <Body />
        <div className="footer">
          <Footer />
        </div>


      </WeatherProvider>
    </div>


  )
}


export default App;
