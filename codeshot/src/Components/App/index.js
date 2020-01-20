import React, { Component } from 'react';
import SelectBox from './../SelectBox';
import Screen from './../Screen';
import themes from './../../Data/theme';
import modes from './../../Data/mode';
import CONSTANTS from './../../Constants';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: "seti",
      selectedMode: "javascript",
      platform: undefined
    }
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
  }

  componentWillMount() {
    this.setState({ platform: navigator.platform });
  }

  handleThemeChange(selectedTheme) {
    if (selectedTheme) {
      const theme = selectedTheme.hasOwnProperty("value") ? selectedTheme.value : selectedTheme
      this.setState({ selectedTheme: theme });
    }
  }

  handleModeChange(selectedMode) {
    if (selectedMode) {
      const mode = selectedMode.hasOwnProperty("value") ? selectedMode.value : selectedMode
      this.setState({ selectedMode: mode });
    }
  }

  render() {
    const { THEME_SELECTBOX, MODE_SELECTBOX } = CONSTANTS;
    return (
      <div className="App">
        <div className="App__Primarycontrols">
          <SelectBox
            name={THEME_SELECTBOX.NAME}
            options={themes}
            title={THEME_SELECTBOX.LABEL_TEXT}
            value={this.state.selectedTheme}
            onChange={this.handleThemeChange}
            noResultsText={THEME_SELECTBOX.NO_RESULTS_TEXT}
            placeholder={THEME_SELECTBOX.PLACEHOLDER_TEXT}
          />
          <SelectBox
            name={MODE_SELECTBOX.NAME}
            options={modes}
            title={MODE_SELECTBOX.LABEL_TEXT}
            value={this.state.selectedMode}
            onChange={this.handleModeChange}
            noResultsText={MODE_SELECTBOX.NO_RESULTS_TEXT}
            placeholder={MODE_SELECTBOX.PLACEHOLDER_TEXT}
          />
        </div>
        <Screen theme={this.state.selectedTheme}
          code= {`
const a = () =>{
        console.log("Dfd")
}`}
          platform={this.state.platform}
          mode={this.state.selectedMode} />
      </div>
    );
  }
}


export default App;
