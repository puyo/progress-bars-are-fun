import React from 'react'

export default class Bar extends React.Component {

    render() {
        return (
            <div className="Bar">
            {this.props.value} / {this.props.limit}
            </div>
        )
    }
}
