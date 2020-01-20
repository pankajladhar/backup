import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeEditor from './../CodeEditor';
import './Screen.css';

class Screen extends Component {
    // componentDidMount() {
    //     const editor = CodeMirror.fromTextArea(document.querySelector(".code"), {
    //         lineNumbers: true,
    //         mode: this.props.mode,
    //         theme: this.props.theme
    //     });
    //     CodeMirror.commands["killLine"](editor);
    //     CodeMirror.commands["selectAll"](editor);
    //     CodeMirror.commands["indentAuto"](editor);
    // }
    render() {
        return (
            <div className={`Screen ${this.props.platform}`}>
                <CodeEditor mode={this.props.mode}
                    theme={this.props.theme}
                    code={this.props.code} />
                <button onClick={this.handleOnClick}> Format </button>
            </div>
        );
    }
}

Screen.propTypes = {
    osType: PropTypes.oneOf(["ios", "win"]).isRequired
};

export default Screen;