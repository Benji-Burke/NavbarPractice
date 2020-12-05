import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
 
} from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />
        <Route exact path='/' component={Home}  />
        <Route  path="/signup">
          <Signup />
        </Route>
        <Route  path="/login">
          <Login/>
        </Route>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
