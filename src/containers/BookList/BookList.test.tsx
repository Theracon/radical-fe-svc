// @ts-nocheck
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import BookList from '.'
import { store } from '@/store'

test('renders component', () => {
  const bookList = [
    {
      title: 'Sample Title 1',
      author: 'Sample Author 1',
      price: '10 GBP'
    },
    {
      title: 'Sample Title 2',
      author: 'Sample Author 2',
      price: '20 GBP'
    }
  ]

  render(
    <Provider store={store}>
      <BookList bookList={bookList} />
    </Provider>
  )

  const element = screen.getAllByAltText('Book Icon')[0]
  expect(element).toBeDefined()
})
