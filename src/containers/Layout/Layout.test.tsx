// @ts-nocheck
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import Layout from '.'
import { store } from '@/store'

test('renders component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout pageHeading='Sample Heading' />
      </BrowserRouter>
    </Provider>
  )

  const element = screen.getByText('Sample Heading')
  expect(element).toBeDefined()
})
