import React, { Component } from 'react'

export default class Bid extends Component {
    render() {
        let company = `Company Name: ${this.props.company}`
        console.log('Bid props', this.props)
        return (
            <div className="no-underline ma1">
                <h1>I'm a Bid!</h1>
                <h2 className="f3 black-80 fw4 lh-solid">{this.props.company}</h2>
                {console.log(this.props)}
                <p className="black-80 fw3">Price: {this.props.price}</p>
                <p className="black-80 fw3">Comments: {this.props.comment}</p>

            </div>
        )
    }
}