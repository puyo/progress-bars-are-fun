import React from 'react'
import Bar from './Bar'

export default class ProgressBarsApp extends React.Component {

    constructor(props) {
        super()
        this.state = {
            bars: [],
            buttons: [],
            limit: 0,
            selected: 0
        }
        this.fetchData(props)
    }

    // {"buttons":[44,27,-31,-37],"bars":[18,48,37],"limit":120}
    fetchData(props) {
        fetch(ProgressBarsApp.URL, props.options || {})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    bars: json.bars,
                    buttons: json.buttons,
                    limit: json.limit
                })
            })
            // .catch(error => {
            // })
    }

    renderBars() {
        return this.state.bars.map((initValue, i) => (
            <Bar key={'bar-' + i}
                 value={initValue}
                 limit={this.state.limit}
            />
        ))
    }

    renderSelect() {
        const opts = this.state.bars.map((initValue, i) => (
            <option key={'opt-' + i} value={i}>Progress bar {i + 1}</option>
        ))
        return (<select>{opts}</select>)
    }

    renderButtons() {
        return this.state.buttons.map((value, i) => (
            <button
                key={'button-' + i}
                onClick={() => this.onClick(i)}
            >
                {value}
            </button>
        ))
    }

    onClick(buttonIndex) {
        const barIndex = this.state.selected
        const diff = this.state.buttons[buttonIndex]
        const oldVal = this.state.bars[barIndex]
        const newState = Object.assign({}, this.state)
        newState.bars[barIndex] = Math.max(0, oldVal + diff)
        this.setState(newState)
    }

    render() {
        return (
            <div>
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

ProgressBarsApp.URL = 'http://frontend-exercise.apps.staging.digital.gov.au/bars'
