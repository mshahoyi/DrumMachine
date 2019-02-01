import React from 'react'
import './Volume.css'

export default class Volume extends React.Component {
    handleChange(e) {
        this.props.handleChange(e.target.value);
    }

    render() {
        return (
            <div id='volume-container'>
                <input type='range' min='0' max='30' value={this.props.volume} onChange={this.handleChange.bind(this)} id='volume-slider'></input>
            </div>
        )
    }
}