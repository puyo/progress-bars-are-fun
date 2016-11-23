import React from 'react'
import { expect } from 'chai'
import { render, mount, shallow } from 'enzyme'
import ProgressBarsApp from '../src/ProgressBarsApp'
import Bar from '../src/Bar'

const testFetch = Promise.resolve({
    bars: [],
    buttons: [],
    limit: [],
    selected: []
})

describe('<ProgressBarsApp />', () => {
    before(function() {
        this.wrapper = shallow(
            <ProgressBarsApp
                bars={[10, 20]}
                buttons={[5, 10, -50]}
                limit={10}
            />
        )
    })

    it('contains the right number of bars', function() {
        expect(this.wrapper.find(Bar)).to.have.length(2)
    })

    it('contains the right number of buttons', function() {
        expect(this.wrapper.find('button')).to.have.length(3)
    })
})
