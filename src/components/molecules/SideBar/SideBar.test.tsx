// @ts-nocheck
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import SideBarComponent from '.'
import { store } from '@/store'

test('renders component', () => {
  const style = { position: 'relative' }

  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideBarComponent activeButton='/dashboard' containerStyle={style} />
      </BrowserRouter>
    </Provider>
  )

  const element = screen.getAllByAltText('Side bar icon')[0]
  expect(element).toBeDefined()
})
