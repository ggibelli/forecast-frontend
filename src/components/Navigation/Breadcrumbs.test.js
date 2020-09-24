import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render, fireEvent } from '@testing-library/react'
import Breadcrumbs from './Breadcrumbs'

describe('Breadcrumbs', () => {
  test.only('renders with redux defaults', () => {
    const { getByText, getByTestId } = render(<Breadcrumbs />)
  })
})
