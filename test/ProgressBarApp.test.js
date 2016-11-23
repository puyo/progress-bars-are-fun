import React from 'react'
import { render, mount, shallow } from 'enzyme'
import ProgressBarsApp from '../src/ProgressBarsApp'
import Bar from '../src/Bar'
import { expect } from 'chai'

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
        expect(this.wrapper.find(Bar).first()).to.have.text('10 / 111')
    })

    it('has the right labels on buttons', function() {
        expect(this.wrapper.find('button').first()).to.have.text('5')
    })

    it('increments progress on click', function() {
        const bar = this.wrapper.find(Bar).first()
        const button = this.wrapper.find('button').first()
        expect(bar).to.have.text('10 / 111')
        button.simulate('click')
        expect(bar).to.have.text('15 / 111')
    })
})
