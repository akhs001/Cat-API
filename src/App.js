import './App.css';
import Header from './components/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import SearchByName from './Screens/search-by-name';
import ShowRandom from './Screens/show-random';


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
