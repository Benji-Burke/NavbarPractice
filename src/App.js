import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Search from './Components/Search';
import About from './Components/About';
import Cards from './Components/Cards';
import Ready from './Components/Ready';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <Search/>
      <About/>
      <Cards/>
      <Ready/>
      <Footer/>

    </div>
  );
}

export default App;
