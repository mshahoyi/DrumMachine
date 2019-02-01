import React from 'react';

export default class Button extends React.Component {
    handleClick() {
        if(this.props.power) {
            let aud = new Audio(this.props.soundPath);
            console.log(this.props.volume)
            aud.volume = this.props.volume;
            aud.play();
        }
    }

    render() {
        return(
            <button disabled={!this.props.power} className={'btn btn-info'} onClick={this.handleClick.bind(this)} >
                {this.props.text}
            </button>
        )
    }
}