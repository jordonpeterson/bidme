import React, { Component } from 'react'

export default class Job extends Component {
    render() {
        let title =`Job Title: ${this.props.job.title}`

        return (
            <div className="no-underline ma1">
                <h2 className="f3 black-80 fw4 lh-solid">{title}</h2>
                {console.log(this.props)}
                <p className="black-80 fw3">Job Description: {this.props.job.description}</p>
                <p className="black-80 fw3">User: {this.props.job.user}</p>

            </div>
        )
    }
}