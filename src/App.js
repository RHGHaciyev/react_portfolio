import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Hireme from './Components/Hireme/Hireme';
import Workslide from './Components/Workslide/Workslide';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Hireme/>
      <Workslide/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
