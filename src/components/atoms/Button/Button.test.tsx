// @ts-nocheck
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import ButtonComponent from '.'
import { store } from '@/store'

test('renders component', () => {
  const children = 'Sample'

  render(
    <Provider store={store}>
      <ButtonComponent>{children}</ButtonComponent>
    </Provider>
  )

  const element = screen.getByText('Sample')
  expect(element).toBeDefined()
})
