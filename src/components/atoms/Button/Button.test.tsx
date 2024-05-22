import { render, screen } from '@testing-library/react'

import ButtonComponent from '.'

test('renders component', () => {
  const children = 'Sample'

  render(<ButtonComponent>{children}</ButtonComponent>)

  const element = screen.getByText('Sample')
  expect(element).toBeDefined()
})
