import React, { Component } from 'react';
import pic from '../anime.png';

export class Section extends Component {
    render() {
        return (
            <section>
                <div className="column-left">
                    <h1>Help artists and creators create Anime</h1>
                    <p>Let fans help fund your passion!</p>
                    <button>Get Started</button>
                </div>
                <div className="column-right">

                    <img src={pic} alt="santa" className="hero-image" />
                </div>

            </section>
        )
    }
}

export default Section
