import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="logo" href="/">Anime Fund</a>
                <div className="nav-items">
                    <Link to="/">Home</Link>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
                <div>
                    <input/>
                     <a href="/login">login</a>
                  <Link to="/signup">
                  <button>Create on Anime.Fund</button>
                  
                  </Link> 
                </div>
            </nav>

            
        )
    }
}

export default Navbar
