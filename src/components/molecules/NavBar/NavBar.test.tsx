// @ts-nocheck
import { render, screen } from '@testing-library/react'

import NavBarComponent from '.'

test('renders component', () => {
  render(<NavBarComponent />)

  const element = screen.getByRole('menubar')
  expect(element).toBeDefined()
})
