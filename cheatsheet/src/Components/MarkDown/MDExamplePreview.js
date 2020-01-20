import React from 'react';
import PropTypes from 'prop-types';

const MDExamplePreview = (props) => {
    return (
        <div className="MDExample__Preview markdown-body">
            <div className="MDExample__Title">Preview</div>
            <div className="MDExample__Content">
                {props.children}
            </div>
        </div>
    )
}

MDExamplePreview.propTypes = {
    children: PropTypes.node
}


export default MDExamplePreview;
