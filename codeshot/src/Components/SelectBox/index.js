import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from './../TextField';
import Select from 'react-select';
import Label from './../Label';
import 'react-select/dist/react-select.css'
import './SelectBox.css';

export default class SelectBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        }

        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    }

    handleInputKeyDown() {
        setTimeout(() => {
            const elm = document.querySelector(`.${this.props.name} .Select-menu-outer .Select-option.is-focused`);
            elm && elm.innerText && this.props.onChange(elm.innerText)
        }, 10);
    }

    render() {
        const { selectedOption } = this.state;
        const { value, options, noResultsText, placeholder, title } = this.props;
        return (
            <div className={`SelectBox ${this.props.name}`}>
                <Label title={title} />
                <Select
                    clearable={false}
                    onInputKeyDown={this.handleInputKeyDown}
                    noResultsText={noResultsText}
                    {...this.props}
                />
            </div>
        )
    }
}