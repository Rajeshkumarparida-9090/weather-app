import logo from './logo.svg';
import './App.css';
import Header from './Header';
import WeatherTable from './weather/WearherTable';
// import SearchBar from './weather/SearchBar';

function App() {
  return (
    <div className="App contenner">
      <Header />
      <div>
        <WeatherTable />
      </div>
      
    </div>
  );
}

export default App;
