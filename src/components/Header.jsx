import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <header className="quakeAlert_header">
                <ul>
                    <li>
                        <h1 className="navbar__h1">QuakeAlert.com</h1>
                    </li>                
                    <li>
                        <Link to="/quake-tracker">Quake tracker</Link>
                    </li>
                </ul >
                <p className="navbar__p">Track earthquakes happening around the world, in real-time</p>
            

            </header>
            


        )
    }
}

export default Header;