// @ts-nocheck
import { render, screen } from '@testing-library/react'

import SeparatorComponent from '.'

test('renders component', () => {
  render(<SeparatorComponent />)

  const element = screen.getByRole('separator')
  expect(element).toBeDefined()
})
