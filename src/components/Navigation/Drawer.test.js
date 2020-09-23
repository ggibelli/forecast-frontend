import React from 'react'
import { render } from '@testing-library/react'
import Drawer from './Drawer'

test('renders', () => {
  const { container } = render(<Drawer />)
  expect(container).toMatchInlineSnapshot()
})
