import React, { Component } from 'react';
import * as CodeMirror from 'codemirror';
import PropTypes from 'prop-types';

class CodeEditor extends Component {
    componentDidMount() {
        const editor = CodeMirror.fromTextArea(document.querySelector(".code"), {
            lineNumbers: true,
            mode: this.props.mode,
            theme: this.props.theme
        });
    }
    render() {
        require(`codemirror/lib/codemirror.css`);
        require(`codemirror/theme/${this.props.theme}.css`);
        require(`codemirror/mode/${this.props.mode}/${this.props.mode}`);
        return (
            <div className="CodeEditor">
                <textarea className="code" value={this.props.code}></textarea>
            </div>
        );
    }
}

CodeEditor.propTypes = {

};

export default CodeEditor;