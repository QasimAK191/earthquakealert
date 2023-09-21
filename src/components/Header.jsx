import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (

            <nav className="quakeAlert_header">
              
                    <a href={'/'}><h1 className="navbar__h1">QuakeAlert</h1></a>   
                <ul>
                    <li>
                       <a href="quake-tracker">Quake Tracker</a>
                    </li>
                    <li>
                        <a href="quake-tracker">Earthquake Index</a>
                    </li>
                    <li className="li2">
                        <a href={'/quake-guide'}>Guide to Preparing for an Earthquake</a>
                    </li>
                    
                </ul >
                
            

            </nav>
            


        )
    }
}

export default Header;