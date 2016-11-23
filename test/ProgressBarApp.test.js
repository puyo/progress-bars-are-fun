import React from 'react'
import { render, mount, shallow } from 'enzyme'
import ProgressBarsApp from '../src/ProgressBarsApp'
import Bar from '../src/Bar'

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme()) // Note the invocation at the end
const expect = chai.expect

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

    it('contains the right labels on buttons', function() {
        expect(this.wrapper.find('button').first()).to.have.text('5')
    })
})
