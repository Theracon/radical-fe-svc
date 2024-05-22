// @ts-nocheck
import { render, screen } from '@testing-library/react'

import BookComponent from '.'

test('renders component', () => {
  const book = {
    title: 'Sample Title',
    author: 'Sample Author',
    price: '10 GBP'
  }

  render(<BookComponent book={book} variant='books' />)

  const element = screen.getByAltText('Book Icon')
  expect(element).toBeDefined()
})
