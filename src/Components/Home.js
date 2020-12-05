import React, { Component } from 'react'
import About from './About'
import Cards from './Cards'
import Ready from './Ready'
import Search from './Search'
import Section from './Section'

export class Home extends Component {
    render() {
        return (
            <div>
                <Section />
                <Search />
                <About />
                <Cards />
                <Ready />
            </div>
        )
    }
}

export default Home
