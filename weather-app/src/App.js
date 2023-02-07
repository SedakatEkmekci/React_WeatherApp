import "./bootstrap/dist/css/bootstrap.min.css"
import Search from "./components/Search";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="App">
          <Search></Search>
          <Main></Main>
          <Footer></Footer>
        </div>

      </div>
    </div>

  );
}

export default App;
