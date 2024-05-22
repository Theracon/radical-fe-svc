import React, { useLayoutEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { West } from '@mui/icons-material'

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

const Dashboard = (): JSX.Element => {
  const pagination = usePagination()

  const PAGE_HEADING = 'New York Times Bestsellers'

  const [heading, setHeading] = useState<string>('')
  const [tab, setTab] = useState<DISPLAY>('DEFAULT')

  const handleSwitchTabs = () => {
    setHeading((current) => (current === '' ? PAGE_HEADING : ''))
    setTab((current) => (current === 'DEFAULT' ? 'VARIANT' : 'DEFAULT'))
  }

  const defaultTab = (
    <React.Fragment>
      <ButtonComponent
        config={{ onClick: handleSwitchTabs }}
        customProps={{ type: 'link', linkTo: routes.dashboard, customClasses: 'button__link' }}>
        {PAGE_HEADING}
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

  const booksTab = (
    <React.Fragment>
      <BookList
        bookList={pagination.data}
        props={{
          variant: 'books',
          currentPage: pagination.currentPage,
          onPageChange: pagination.handlePageChange,
          totalCount: pagination.totalCount,
          totalPages: pagination.totalPages
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
    </React.Fragment>
  )

  useLayoutEffect(() => {
    setHeading('')
    setTab('DEFAULT')
  }, [])

  return (
    <Layout pageHeading={heading}>
      <Box>{tab === 'DEFAULT' ? defaultTab : booksTab}</Box>
    </Layout>
  )
}

export default Dashboard
