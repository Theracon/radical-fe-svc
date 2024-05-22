// @ts-nocheck
import { render, screen } from '@testing-library/react'

import SearchBarComponent from '.'

test('renders component', () => {
  render(<SearchBarComponent searchQuery='test' setSearchQuery={() => {}} />)

  const element = screen.getByPlaceholderText('What books would you like to find?')
  expect(element).toBeDefined()
})
