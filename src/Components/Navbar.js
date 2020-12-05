import React, { Component } from 'react';
import './Styles.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <a className="logo" href="/">Anime Fund</a>
                <div className="nav-items">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </div>
                <div>
                    <input/>
                     <a href="/login">login</a>
                    <button>Create on Anime.Fund</button>
                </div>
            </nav>
        )
    }
}

export default Navbar
