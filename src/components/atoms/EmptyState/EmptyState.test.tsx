import { render, screen } from '@testing-library/react'

import EmptyStateComponent from '.'

test('renders component', () => {
  render(<EmptyStateComponent></EmptyStateComponent>)

  const element = screen.getByText('No items to display. ☹️')
  expect(element).toBeDefined()
})
