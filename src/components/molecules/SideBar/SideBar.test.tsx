// @ts-nocheck
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import SideBarComponent from '.'

test('renders component', () => {
  const style = { position: 'relative' }

  render(
    <BrowserRouter>
      <SideBarComponent activeButton='/dashboard' containerStyle={style} />
    </BrowserRouter>
  )

  const element = screen.getAllByAltText('Side bar icon')[0]
  expect(element).toBeDefined()
})
