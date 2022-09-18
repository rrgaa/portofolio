import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css"
import Welcome from './Components/Welcome';
import Navigasi from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Aos from "aos";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <div className="App">
      <Navigasi/>
      <Welcome/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
