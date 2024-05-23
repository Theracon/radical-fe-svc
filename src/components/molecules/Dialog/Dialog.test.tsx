// @ts-nocheck
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import DialogComponent from '.'
import { CustomDialogConfig } from '@/types/dialog'
import { store } from '@/store'

test('renders component', () => {
  const config = { open: true }
  const customProps: CustomDialogConfig = {
    size: 'sm',
    title: 'Sample Dialog',
    content: 'Sample dialog content'
  }

  render(
    <Provider store={store}>
      <DialogComponent config={config} customProps={customProps} />
    </Provider>
  )

  const element = screen.getByText('Sample dialog content')
  expect(element).toBeDefined()
})
