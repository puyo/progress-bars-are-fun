import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import ProgressBarsApp from '../src/ProgressBarsApp'
import Bar from '../src/Bar'

describe('<ProgressBarsApp />', () => {
    before(function() {
        this.wrapper = mount(
            <ProgressBarsApp
                bars={[10, 20]}
                buttons={[5, 10, -50]}
                limit={111}
            />
        )
    })

    it('has the right number of bars', function() {
        expect(this.wrapper.find(Bar)).to.have.length(2)
    })

    it('has the right number of buttons', function() {
        expect(this.wrapper.find('button')).to.have.length(3)
    })

    it('has the right labels on progress bars', function() {
        expect(this.wrapper.find(Bar).first()).to.have.text('9%')
    })

    it('has the right labels on buttons', function() {
        expect(this.wrapper.find('button').first()).to.have.text('+5')
    })

    it('increments progress on click', function() {
        const bar = this.wrapper.find(Bar).first()
        const button = this.wrapper.find('button').at(1)
        expect(bar).to.have.text('9%')
        button.simulate('click')
        expect(bar).to.have.text('18%')
    })

    it('increments selected progress bar', function() {
        const bar = this.wrapper.find(Bar).at(1)
        const button = this.wrapper.find('button').at(1)
        const select = this.wrapper.find('select').first()
        expect(bar).to.have.text('18%')
        select.get(0).selectedIndex = 1
        select.simulate('change')
        button.simulate('click')
        expect(bar).to.have.text('27%')
    })
})
