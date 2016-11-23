import React from 'react'

export default class Bar extends React.Component {
    render() {
        const percent = Math.round(100.0 * this.props.value / this.props.limit)
        const stylePercent = Math.min(100, percent)
        const fillColor = percent > 100 ? 'red' : 'green'
        const fillStyle = {
            width: '' + stylePercent + '%',
            backgroundColor: fillColor,
            opacity: 0.2
        }
        return (
            <div className="Bar">
                <span className="text">
                    {percent}%
                </span>
                <span className="fill" style={fillStyle}></span>
            </div>
        )
    }
}

Bar.propTypes = {
    limit: React.PropTypes.number,
    value: React.PropTypes.number
}