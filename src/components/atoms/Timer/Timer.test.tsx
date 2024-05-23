// @ts-nocheck
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import TimerComponent from '.'
import { store } from '@/store'

test('renders component', () => {
  render(
    <Provider store={store}>
      <TimerComponent showInfo={true} />
    </Provider>
  )

  const element = screen.getByText('Wait...')
  expect(element).toBeDefined()
})
