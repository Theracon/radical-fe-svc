// @ts-nocheck
import { render, screen } from '@testing-library/react'

import InputComponent from '.'

test('renders component', () => {
  const config = { placeholder: 'Sample input' }
  const customProps = {}

  render(<InputComponent config={config} customProps={customProps} />)

  const element = screen.getByPlaceholderText('Sample input')
  expect(element).toBeDefined()
})
