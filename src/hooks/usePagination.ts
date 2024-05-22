import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/store'
import { Book, IFavourite } from '@/types/book'

export const usePagination = (dataType?: 'favourites') => {
  const LIMIT = 5

  const { bookList, favouriteList } = useSelector((state: RootState) => state.book)

  const dataList: Book[] | IFavourite[] = dataType === 'favourites' ? favouriteList : bookList

  const [allBooks, setAllBooks] = useState<Book[] | IFavourite[]>(dataList)
  const [data, setData] = useState<Book[] | IFavourite[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [totalCount, setTotalCount] = useState<number>(0)

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault()
    setCurrentPage(value)
  }

  const fetchBooks = (list = allBooks, pageNumber: number | undefined = currentPage) => {
    const offset = LIMIT * (pageNumber - 1)
    const endIndex = offset + LIMIT
    let data: Book[] | IFavourite[]

    if (list.length <= endIndex) {
      data = list.slice(offset)
    } else {
      data = list.slice(offset, endIndex)
    }

    const numPages = Math.ceil(list.length / LIMIT)

    setTotalPages(numPages)
    setData(data)
  }

  const handleSearchByAuthorOrTitle = (query: string) => {
    let searchQuery = query

    if (searchQuery === '') {
      setAllBooks(dataList)
      fetchBooks(dataList)
    }

    searchQuery = searchQuery.trim().toLowerCase()

    const books = dataList.filter(
      (book) => book.author?.toLowerCase().includes(searchQuery) || book.title?.toLowerCase().includes(searchQuery)
    )

    setAllBooks(books)
    fetchBooks()
  }

  useEffect(() => {
    const count = dataType === 'favourites' ? favouriteList.length : bookList.length
    const totalPages = Math.ceil(count / LIMIT)

    fetchBooks()
    setTotalCount(totalCount)
    setTotalPages(totalPages)
    setCurrentPage(1)
  }, [])

  useEffect(() => {
    fetchBooks(allBooks, currentPage)
  }, [currentPage])

  return {
    data,
    currentPage,
    handlePageChange,
    handleSearchByAuthorOrTitle,
    totalCount,
    totalPages,
    fetchBooks
  }
}
