import React from 'react'
import { render } from '@testing-library/react'
import Drawer from './Drawer'
import HomePage from '../HomePage'

jest.mock('../HomePage', () => ({
  HomePage: jest.fn(() => <div data-testid="HomePage" />),
}))

test('renders', () => {
  const { container } = render(<Drawer> {HomePage} </Drawer>)
  expect(container).toMatchInlineSnapshot()
})
