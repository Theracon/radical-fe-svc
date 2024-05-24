import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { West } from '@mui/icons-material'
import { useDispatch } from 'react-redux'

import Layout from '@/containers/Layout'
import BookList from '@/containers/BookList'
import ButtonComponent from '@/components/atoms/Button'
import ImageComponent from '@/components/atoms/Image'
import { usePagination } from '@/hooks/usePagination'
import { routes } from '@/constants'
import { flex } from '@/utils/display'
import { DISPLAY } from '@/types/page'
import NYTBooksL from '@/assets/images/nyt-books-1.svg'
import NYTBooksM from '@/assets/images/nyt-books-2.svg'
import NYTBooksR from '@/assets/images/nyt-books-3.svg'
import FavBooksL from '@/assets/images/fav-books-1.svg'
import FavBooksM from '@/assets/images/fav-books-2.svg'
import FavBooksR from '@/assets/images/fav-books-3.svg'
import { useApi } from '@/hooks/useApi'
import { setLoading } from '@/store/app/appSlice'
import { setBooks, setFavourites, setPageNumber } from '@/store/book/bookSlice'
import { Book } from '@/types/book'

const Dashboard = (): JSX.Element => {
  const { data, currentPage, handlePageChange, totalCount, totalPages } = usePagination()
  const { handleMakeHttpRequest } = useApi()

  const OPTIONAL_PAGE_HEADING = 'New York Times Bestsellers'

  const dispatch = useDispatch()

  const [tab, setTab] = useState<DISPLAY>('DEFAULT')
  const [heading, setHeading] = useState<string>('')
  const [listOfBooks, setListOfBooks] = useState<Book[]>(data)
  const [searchBarValue, setSearchBarValue] = useState<string>('')
  const [lastSearchQuery, setLastSearchQuery] = useState<string>('')

  const handleInitializeDashboard = async () => {
    setTab('DEFAULT')
    setHeading('')
    setListOfBooks([])
    setSearchBarValue('')
    setLastSearchQuery('')
  }

  const handleSwitchTabs = async () => {
    setSearchBarValue('')
    setLastSearchQuery('')
    setHeading((current) => (current === '' ? OPTIONAL_PAGE_HEADING : ''))
    setTab((current) => (current === 'DEFAULT' ? 'VARIANT' : 'DEFAULT'))
  }

  const handleFetchBooks = async () => {
    try {
      setHeading(OPTIONAL_PAGE_HEADING)
      setSearchBarValue('')
      setTab('VARIANT')
      dispatch(setLoading(true))
      const res = await handleMakeHttpRequest('get-books', undefined, true)
      dispatch(setBooks(res || []))
      dispatch(setPageNumber(1))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
    }
  }

  const handleBookSearch = async (searchQuery: string) => {
    try {
      if (!searchQuery || searchQuery === lastSearchQuery) return

      setTab('VARIANT')
      setLastSearchQuery(searchQuery)
      dispatch(setLoading(true))
      const res = await handleMakeHttpRequest('get-books-w-query', searchQuery, true)
      dispatch(setBooks(res || []))
      dispatch(setPageNumber(1))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
    }
  }

  const handleAddFavourite = async ({ title, author, price }: Book) => {
    const data = { title, author, price, rating: 0 }
    const res = await handleMakeHttpRequest('add-favourite', undefined, false, data)
    dispatch(setFavourites(res))
  }

  const DefaultTabDisplay = (
    <React.Fragment>
      <ButtonComponent
        config={{
          onClick: handleFetchBooks
        }}
        customProps={{ type: 'link', linkTo: routes.dashboard, customClasses: 'button__link' }}>
        {OPTIONAL_PAGE_HEADING}
      </ButtonComponent>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ImageComponent customProps={{ src: NYTBooksL }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageComponent customProps={{ src: NYTBooksM }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageComponent customProps={{ src: NYTBooksR }} />
        </Grid>
      </Grid>
      <ButtonComponent customProps={{ type: 'link', linkTo: routes.favourites, customClasses: 'button__link' }}>
        Favourites
      </ButtonComponent>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ImageComponent customProps={{ src: FavBooksL }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageComponent customProps={{ src: FavBooksM }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageComponent customProps={{ src: FavBooksR }} />
        </Grid>
      </Grid>
    </React.Fragment>
  )

  const BooksTabDisplay = (
    <Box sx={{ minHeight: '50vh' }}>
      <BookList
        key={data.length}
        bookList={listOfBooks}
        props={{
          variant: 'books',
          currentPage: currentPage,
          onPageChange: handlePageChange,
          totalCount: totalCount,
          totalPages: totalPages,
          likeFunction: handleAddFavourite
        }}
      />
      <Box gap={0.5} sx={{ ...flex('row', 'flex-start') }}>
        <West color='disabled' />
        <Typography variant='body2'>Return to</Typography>
        <ButtonComponent
          config={{ onClick: handleSwitchTabs }}
          customProps={{
            customContainerStyle: { margin: 0, padding: 0 },
            customBtnStyle: { padding: 0, margin: 0, textTransform: 'capitalize' }
          }}>
          Dashboard
        </ButtonComponent>
      </Box>
    </Box>
  )

  let Display = undefined

  if (tab === 'VARIANT') {
    Display = BooksTabDisplay
  } else {
    Display = DefaultTabDisplay
  }

  useEffect(() => {
    handleInitializeDashboard()
  }, [])

  useEffect(() => {
    setListOfBooks(data)
  }, [data])

  return (
    <Layout
      pageHeading={heading}
      searchBarValue={searchBarValue}
      setSearchBarValue={setSearchBarValue}
      searchBarPrimaryAction={handleBookSearch}>
      {Display}
    </Layout>
  )
}

export default Dashboard
