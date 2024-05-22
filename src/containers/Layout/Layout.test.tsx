// @ts-nocheck
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Layout from '.'

test('renders component', () => {
  render(
    <BrowserRouter>
      <Layout pageHeading='Sample Heading' />
    </BrowserRouter>
  )

  const element = screen.getByText('Sample Heading')
  expect(element).toBeDefined()
})
