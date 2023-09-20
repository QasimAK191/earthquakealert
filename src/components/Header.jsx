import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="quakeAlert_header">
                <h1 className="navbar__h1">QuakeAlert</h1>
                <p className="navbar__p">Track earthquakes happening around the world, in real-time<br /></p>
            </header>
        )
    }
}

export default Header;