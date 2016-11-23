import React from 'react'
import Bar from './Bar'

export default class ProgressBarsApp extends React.Component {

    constructor(props) {
        super()
        this.state = {
            selected: 0,
            values: props.bars.map(initValue => initValue)
        }
    }

    renderBars() {
        return this.state.values.map((value, i) => (
            <Bar
                key={'bar-' + i}
                limit={this.props.limit}
                value={value}
            />
        ))
    }

    renderSelect() {
        const opts = this.props.bars.map((initValue, i) => (
            <option
                key={'opt-' + i}
                value={i}
            >
                {'Progress bar '}{i + 1}
            </option>
        ))
        const onChange = (e) => {
            this.setState({selected: parseInt(e.target.value)})
        }
        return (
            <select
                onChange={onChange}
            >
                {opts}
            </select>
        )

    }

    renderButtons() {
        return this.props.buttons.map((value, i) => (
            <button
                key={'button-' + i}
                onClick={() => this.onClick(i)}
            >
                {value >= 0 ? '+' : ''}{value}
            </button>
        ))
    }

    onClick(buttonIndex) {
        const barIndex = this.state.selected
        const diff = this.props.buttons[buttonIndex]
        const oldVal = this.state.values[barIndex]
        const newState = Object.assign({}, this.state)
        newState.values[barIndex] = Math.max(0, oldVal + diff)
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <p> {JSON.stringify(this.props)} </p>
                <p> {JSON.stringify(this.state)} </p>

                {this.renderBars()}

                <div>
                    {this.renderSelect()}
                    {this.renderButtons()}
                </div>
            </div>
        )
    }
}

ProgressBarsApp.propTypes = {
    bars: React.PropTypes.arrayOf(React.PropTypes.number),
    buttons: React.PropTypes.arrayOf(React.PropTypes.number),
    limit: React.PropTypes.number
}
