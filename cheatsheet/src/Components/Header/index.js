import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="Header__Container">
            <div className="Container Header">
                <img src="" alt="Cheatsheet" className="Header__Logo"/>
                button
                <nav className="Header__Navigaion">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/markdown">Markdown</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
    )
}

export default Header;