import React from 'react';
import PropTypes from 'prop-types';

const MarkDown = (props) => {
    return (
        <div id={props.id}
            className="MarkDown">
            <div className="MarkDown__Divider">
                <hr />
            </div>
            <h1 className="MarkDown__Title">{props.title}</h1>
            <p className="MarkDown__Info">{props.description}</p>
            {props.children}
        </div>
    )
}

MarkDown.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node
}

export default MarkDown