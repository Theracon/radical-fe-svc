// @ts-nocheck
import { render, screen } from '@testing-library/react'

import SpinnerComponent from '.'

test('renders component', () => {
  render(<SpinnerComponent />)

  const element = screen.getByRole('status')
  expect(element).toBeDefined()
})
