import React from 'react'
import './Display.css'

export default class Display extends React.Component {
    componentDidMount() {
        console.log('type is', this.type, '\nprops ', this)
    }
    render() {
        return (
            <div id='display'>
                {this.props.text}
            </div>
        )
    }
}