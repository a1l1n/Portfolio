import './App.css';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main className="main" >
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
