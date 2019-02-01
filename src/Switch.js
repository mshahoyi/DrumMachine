import React from 'react';
import './Switch.css';

const STATUS = {
    onClass: 'on',
    offClass: 'off'
}

export default class Switch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            state: props.state
        }
    }

    setClass(power) {
        if(power) return STATUS.onClass
        else return STATUS.offClass
    }

    render() {
        return (
            <div id='container'>
                <p id='name'>{this.props.name}</p>
                <div id='frame' onClick={() => {
                    this.setState((prevState) => { return { state: !prevState.state }});
                    this.props.clickfn();
                }}>
                    <div id='switch' className={this.setClass(this.state.state)}></div>
                </div>
            </div>
        )
    }
}