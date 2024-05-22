// @ts-nocheck
import { render, screen } from '@testing-library/react'

import BackdropComponent from '.'

test('renders component', () => {
  const config = { open: true }

  render(
    <BackdropComponent config={config}>
      <h1>Backdrop</h1>
    </BackdropComponent>
  )

  const element = screen.getByText('Backdrop')
  expect(element).toBeDefined()
})
