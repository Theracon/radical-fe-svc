import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/store'
import { Book, IFavourite } from '@/types/book'

export const usePagination = (dataType?: 'favourites') => {
  const LIMIT = 5

  const { bookList, favouriteList } = useSelector((state: RootState) => state.book)

  const dataList: Book[] | IFavourite[] = dataType === 'favourites' ? favouriteList : bookList

  const [allBooks, setAllBooks] = useState<Book[] | IFavourite[]>([])
  const [data, setData] = useState<Book[] | IFavourite[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalCount, setTotalCount] = useState<number>(0)

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault()
    setCurrentPage(value)
  }

  const handleFetchBooksByPage = (
    list: Book[] | IFavourite[] = dataList,
    pageNumber: number | undefined = currentPage
  ) => {
    const offset = LIMIT * (pageNumber - 1)
    const endIndex = offset + LIMIT
    let data: Book[] | IFavourite[]

    if (list.length <= endIndex) {
      data = list.slice(offset)
    } else {
      data = list.slice(offset, endIndex)
    }

    const numPages = Math.ceil(list.length / LIMIT)
    setData(data)
    setTotalPages(numPages)
  }

  const handleFetchFavouritesByPage = (
    list: Book[] | IFavourite[] = allBooks,
    pageNumber: number | undefined = currentPage
  ) => {
    const offset = LIMIT * (pageNumber - 1)
    const endIndex = offset + LIMIT
    let data: Book[] | IFavourite[]

    if (list.length <= endIndex) {
      data = list.slice(offset)
    } else {
      data = list.slice(offset, endIndex)
    }

    const numPages = Math.ceil(list.length / LIMIT)
    setData(data)
    setTotalPages(numPages)
  }

  const handleSearchByAuthorOrTitle = (query: string) => {
    let searchQuery = query

    if (searchQuery === '') {
      setAllBooks(dataList)
      handleFetchFavouritesByPage(dataList)
    }

    searchQuery = searchQuery.trim().toLowerCase()
    const books = dataList.filter(
      (book) => book.author?.toLowerCase().includes(searchQuery) || book.title?.toLowerCase().includes(searchQuery)
    )
    setAllBooks(books)
    handleFetchFavouritesByPage()
  }

  useEffect(() => {
    const count = dataType === 'favourites' ? favouriteList.length : bookList.length
    const totalPages = Math.ceil(count / LIMIT)

    handleFetchFavouritesByPage()
    setTotalCount(totalCount)
    setTotalPages(totalPages)
    setCurrentPage(1)
  }, [])

  useEffect(() => {
    handleFetchBooksByPage()
  }, [bookList])

  useEffect(() => {
    const dataList: Book[] | IFavourite[] = dataType === 'favourites' ? favouriteList : bookList
    setAllBooks(dataList)
    handleFetchFavouritesByPage()
  }, [favouriteList])

  useEffect(() => {
    if (dataType === 'favourites') {
      handleFetchFavouritesByPage(allBooks, currentPage)
    } else {
      handleFetchBooksByPage(dataList, currentPage)
    }
  }, [currentPage])

  return {
    data,
    currentPage,
    handlePageChange,
    handleSearchByAuthorOrTitle,
    totalCount,
    totalPages,
    setAllBooks
  }
}
