// @ts-nocheck
import { render, screen } from '@testing-library/react'

import IconComponent from '.'

test('renders component', () => {
  render(
    <IconComponent>
      <span>Icon</span>
    </IconComponent>
  )

  const element = screen.getByText('Icon')
  expect(element).toBeDefined()
})
