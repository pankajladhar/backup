import React from 'react';
import PropTypes from 'prop-types';

const MDExampleCode = (props) => {
    return (
        <div className="MDExample__Code">
            <div className="MDExample__Title">Code</div>
            <div className="MDExample__Content">
                {props.children}
            </div>
        </div>
    )
}

MDExampleCode.propTypes = {
    children: PropTypes.node
}

export default MDExampleCode;
