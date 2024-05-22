import { render, screen } from '@testing-library/react'

import ImageComponent from '.'

test('renders component', () => {
  render(<ImageComponent />)

  const element = screen.getByAltText('A Radical Company image')
  expect(element).toBeDefined()
})
