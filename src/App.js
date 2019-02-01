import React, { Component } from 'react';
import './App.css';
import Button from './Button.js'
import Switch from './Switch.js';
import Display from './Display';
import Volume from './Volume.js'

const STATUS = {
  MODE: {
    PIANO: 'PIANO',
    HEATER: 'HEATER'
  }
}

const CHORD_TO_FILE = {
  A: '5th_String_A.mp3',
  D: '4th_String_D.mp3'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      type: STATUS.MODE.PIANO,
      volume: 30,
      display: 'welcome'
    }
    
    this._power_function = this._power_function.bind(this);
    this._mode_changed = this._mode_changed.bind(this);
    this._handle_volume = this._handle_volume.bind(this);
  }

  render() {
    return (
      <div id='centerDiv'>
        <div id='buttonArea'>
          <div id='row1'>
            <Button text='A' soundPath={this.soundPath('A')} power={this.state.power} volume={this.state.volume/30}/>
            <Button text='Am' />
            <Button text='D' soundPath={this.soundPath('D')} power={this.state.power} volume={this.state.volume/30}/>
          </div>
          <div id="row2">
            <Button text='Dm' />
            <Button text='E' />
            <Button text='Em' />
          </div>
          <div id='row3'>
            <Button text='G' />
            <Button text='C' />
            <Button text='F' />
          </div>
        </div>
        <div id='settingArea'>
          <Switch name={'Power'} clickfn={this._power_function} state={this.state.power}/>
          <Display text={this.state.display} animation={'display-animation'}/>
          <Volume handleChange={this._handle_volume} volume={this.state.volume}/>
          <Switch state={this.modeToBool(this.state.type)} name={'Mode'} clickfn={this._mode_changed}/>
        </div>
      </div>
    );
  }

  _power_function() {
    this.setState((state) => {
      return {
        power: !state.power,
        display: 'Power ' + (!state.power ? 'on' : 'off')
      }
    })
  }

  _mode_changed() {
    this.setState(state => {
      let nextMode = this.toggleMode(state.type);
      return {
        type: nextMode,
        display: nextMode
      }
    })
  }

  modeToBool = (string) => { 
    if(string === STATUS.MODE.PIANO) return true;
    else return false;
  }

  toggleMode(mode) {
    if(mode === STATUS.MODE.PIANO) return STATUS.MODE.HEATER
    else return STATUS.MODE.PIANO
  }

  soundPath(chord) {
    let path = './Chords/' + CHORD_TO_FILE[chord];
    return path;
  }

  _handle_volume(volume) {
    this.setState({volume: volume, display: 'Volume: ' + volume})
  }
}

export default App;
