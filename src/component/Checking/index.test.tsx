import React from 'react'
import renderer from 'react-test-renderer'
import Checking from './index'

it('Test Checking', () => {
  const tree = renderer
    .create(<Checking />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
