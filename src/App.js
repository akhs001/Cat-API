import './App.css';
import Header from './components/Header';
import SearchByName from './Screens/search-by-name';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <SearchByName />
    </div>
  );
}

export default App;
