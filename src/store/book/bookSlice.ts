import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Book, IFavourite } from '@/types/book'
import { DUMMY_BOOK_LIST, DUMMY_FAVOURITES_LIST } from '@/constants'

interface IBookState {
  bookList: Book[]
  favouriteList: IFavourite[]
  currentBook: IFavourite
  pageNumber: number
}

const initialState: IBookState = {
  bookList: DUMMY_BOOK_LIST,
  favouriteList: DUMMY_FAVOURITES_LIST,
  currentBook: {},
  pageNumber: 1
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.bookList = action.payload
    },
    setFavourites: (state, action: PayloadAction<IFavourite[]>) => {
      state.favouriteList = action.payload
    },
    setCurrentBook: (state, action: PayloadAction<IFavourite>) => {
      state.currentBook = action.payload
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    }
  }
})

export const { setBooks, setFavourites, setCurrentBook, setPageNumber } = bookSlice.actions

export default bookSlice.reducer
