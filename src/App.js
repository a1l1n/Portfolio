import './App.css';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { NavBar } from './Components/NavBar/NavBar';
import { Skills } from './Components/Skills/Skills';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';
import { Footer } from "./Components/Footer/Footer";
import { Experience } from './Components/Experience/Experience';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Experience />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
