import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Logo.css';

const Logo = props => {
    return (
        <Link to="/cheatsheet" className={`Logo__Main ${props.className}`}>
            <span className="sr-only">Cheatsheet</span>
        </Link>
    );
};

Logo.propTypes = {
    className: PropTypes.string
};

export default Logo;