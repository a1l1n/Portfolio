import './App.css';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { Skills } from './Components/Skills/Skills';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from "./Components/Footer/Footer";


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Portfolio />
{/*       <main className="main" >
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main> */}
    </div>
  );
}

export default App;
