import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

class TextField extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <input className="TextField"
                {...this.props}
            />
        );
    }
}

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    type: PropTypes.oneOf(["text"])
};

export default TextField;