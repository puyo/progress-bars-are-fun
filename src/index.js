import React from 'react'
import ReactDOM from 'react-dom'
import ProgressBarsApp from './ProgressBarsApp'

const URL = 'http://frontend-exercise.apps.staging.digital.gov.au/bars'

const css = require('./index.styl')

fetch(URL)
    .then(res => res.json())
    .then(json => {
        ReactDOM.render(
            React.createElement(ProgressBarsApp, json),
            document.querySelector('.root')
        )
    })
// .catch(error => {
// })
