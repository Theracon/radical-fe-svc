// @ts-nocheck
import { render, screen } from '@testing-library/react'

import DialogComponent from '.'
import { CustomDialogConfig } from '@/types/dialog'

test('renders component', () => {
  const config = { open: true }
  const customProps: CustomDialogConfig = {
    size: 'sm',
    title: 'Sample Dialog',
    content: 'Sample dialog content'
  }

  render(<DialogComponent config={config} customProps={customProps} />)

  const element = screen.getByText('Sample dialog content')
  expect(element).toBeDefined()
})
