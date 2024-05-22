// @ts-nocheck
import { render, screen } from '@testing-library/react'

import FormComponent from '.'

test('renders component', () => {
  render(
    <FormComponent>
      <input placeholder='Sample input' />
    </FormComponent>
  )

  const element = screen.getByPlaceholderText('Sample input')
  expect(element).toBeDefined()
})
