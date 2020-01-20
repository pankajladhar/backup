import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../Logo';
import './SideBar.css';

const SideBar = (props) => {
    return(
        <aside className="SideBar">
            <Logo />
            <h2 className="SideBar__Logo">{props.heading}</h2>
            <ul className="SideBar__List">
                {
                    props.options.map((option)=>{
                        return(
                            <li key={option.id}>
                                <a href={`/cheatsheet/markdown/#${option.id}`}>{option.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

SideBar.propTypes = {
    heading: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            options: PropTypes.string,
            title: PropTypes.string,
        })
    )
}

export default SideBar;