import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <nav className="quakeAlert_header">
              
                    <h1 className="navbar__h1"><a href={'/'}>QuakeAlert</a></h1>   
                <ul>
                    <li>
                       <a href="quake-tracker">Quake Tracker</a>
                    </li>
                </ul >
                <p className="navbar__p">Track earthquakes happening around the world, <br />in real-time</p>
            

            </nav>
            


        )
    }
}

export default Header;