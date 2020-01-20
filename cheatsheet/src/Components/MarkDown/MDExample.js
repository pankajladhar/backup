import React from 'react';
import PropTypes from 'prop-types';
import './MDExample.css'

const MDExample = (props) => {
    return (
        <div className="MDExample">
            {
                props.title && props.description &&
                <div className="MDExample__Info">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            }
            <div className="MDExample__Body">
                {props.children}
            </div>
        </div>
    )
}

MDExample.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node
}

export default MDExample;