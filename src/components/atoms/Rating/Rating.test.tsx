// @ts-nocheck
import { render, screen } from '@testing-library/react'

import RatingComponent from '.'

test('renders component', () => {
  render(<RatingComponent />)

  const element = screen.getByRole('checkbox')
  expect(element).toBeDefined()
})
