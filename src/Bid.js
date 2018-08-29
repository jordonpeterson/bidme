import React, { Component } from 'react'

export default class Bid extends Component {
    render() {
        let company = `Company Name: ${this.props.bid.company}`

        return (
            <div className="no-underline ma1">
                <h2 className="f3 black-80 fw4 lh-solid">{company}</h2>
                {console.log(this.props)}
                <p className="black-80 fw3">Price: {this.props.bid.price}</p>
                <p className="black-80 fw3">Comments: {this.props.bid.comment}</p>

            </div>
        )
    }
}