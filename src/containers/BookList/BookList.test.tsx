import { render, screen } from '@testing-library/react'

import BookList from '.'

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

  render(<BookList bookList={bookList} />)

  const element = screen.getAllByAltText('Book Icon')[0]
  expect(element).toBeDefined()
})
