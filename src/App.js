import './App.css';
import { Home } from './Components/Home/Home';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
