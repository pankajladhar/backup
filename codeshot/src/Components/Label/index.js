import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Label.css';

class Label extends Component {
    render() {
        return (
            <label className="Label"
                {...this.props}>
                {this.props.title}
            </label>
        );
    }
}

Label.propTypes = {
    title: PropTypes.string.isRequired
};

export default Label;