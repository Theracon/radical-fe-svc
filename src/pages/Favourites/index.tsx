import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { West } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '@/containers/Layout'
import BookList from '@/containers/BookList'
import { usePagination } from '@/hooks/usePagination'
import { DISPLAY } from '@/types/page'
import DialogComponent from '@/components/molecules/Dialog'
import ImageComponent from '@/components/atoms/Image'
import Library from '@/assets/images/library.svg'
import FormComponent from '@/components/molecules/Form'
import InputComponent from '@/components/atoms/Input'
import { flex } from '@/utils/display'
import ButtonComponent from '@/components/atoms/Button'
import RatingComponent from '@/components/atoms/Rating'
import { RootState } from '@/store'
import { setCurrentBook } from '@/store/book/bookSlice'
import { IFavourite } from '@/types/book'

const Favourites = (): JSX.Element => {
  const pagination = usePagination('favourites')

  const PAGE_HEADING = 'Favourites'

  const dispath = useDispatch()
  const { currentBook } = useSelector((state: RootState) => state.book)

  const [heading, setHeading] = useState<string>('')
  const [hasSearchBar, setHasSearchBar] = useState<boolean>(false)
  const [tab, setTab] = useState<DISPLAY>('DEFAULT')
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [bookState, setBookState] = useState<IFavourite>(currentBook!)
  const [searchBarValue, setSearchBarValue] = useState<string>('')

  const handleSwitchTabs = () => {
    setHeading((current) => (current === '' ? PAGE_HEADING : ''))
    setTab((current) => (current === 'DEFAULT' ? 'VARIANT' : 'DEFAULT'))
    setHasSearchBar((current) => !current)
  }

  const handleOnChange = (field: keyof IFavourite, value: any) => {
    setBookState((current) => ({
      ...current,
      [field]: value
    }))
  }

  const handleSetCurrentBook = (book: IFavourite) => {
    dispath(setCurrentBook(book))
    handleSwitchTabs()
  }

  const handleToggleDialog = (state: boolean): void => {
    setShowDialog(state)
  }

  const handleAddFavourite = () => {
    alert('added')
  }

  const handleRemoveFavourite = () => {
    handleToggleDialog(false)
  }

  const handleUpdateFavourite = () => {
    alert(JSON.stringify(bookState))
  }

  const defaultTab = (
    <React.Fragment>
      <BookList
        bookList={pagination.data}
        props={{
          variant: 'favourites',
          currentPage: pagination.currentPage,
          onPageChange: pagination.handlePageChange,
          totalCount: pagination.totalCount,
          totalPages: pagination.totalPages,
          updateFunction: handleSetCurrentBook,
          deleteFunction: handleToggleDialog.bind(this, true),
          likeFunction: handleAddFavourite
        }}
      />
      <DialogComponent
        config={{ open: showDialog }}
        customProps={{
          size: 'sm',
          title: 'Confirm',
          content: 'Are you sure you want to proceed?',
          primaryAction: handleRemoveFavourite,
          secondaryAction: handleToggleDialog.bind(this, false)
        }}
      />
    </React.Fragment>
  )

  const currentBookTab = (
    <Box sx={{ minHeight: '50vh' }}>
      <Box px={2}>
        <ImageComponent
          customProps={{
            src: Library,
            width: '100%',
            height: '24.4vh',
            includeOverlay: true,
            overlayContent: `${currentBook?.title ?? ''} by ${currentBook?.author ?? ''}`
          }}
        />
        <Typography my={5} sx={{ fontWeight: 700 }}>
          Edit
        </Typography>
      </Box>

      <FormComponent
        config={{}}
        customProps={{
          httpRequestConfig: { data: {} },
          containerStyle: { width: { sm: '100%', md: '500px' }, padding: 0 }
        }}>
        <Grid container spacing={5} p={0} sx={{ width: '100%', height: '5vh', ...flex() }}>
          <Grid item xs={12} sx={{ ...flex(), width: '100%' }}>
            <Grid
              item
              xs={2}
              p={0}
              sx={{ width: '100%', height: '5vh', backgroundColor: '#93b4bc', color: '#ffffff', ...flex() }}>
              Cost
            </Grid>
            <Grid item xs={10} p={0} sx={{ height: '5vh' }}>
              <InputComponent
                config={{
                  value: bookState.price ?? '',
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleOnChange('price', e.target.value)
                }}
                customProps={{
                  fullWidth: true,
                  inputStyle: { height: '5vh', borderRadius: 0 }
                }}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ ...flex() }}>
            <Grid item xs={2} p={0} sx={{ height: '5vh', backgroundColor: '#93b4bc', color: '#ffffff', ...flex() }}>
              Rating
            </Grid>
            <Grid item xs={10} px={2} sx={{ height: '5vh', backgroundColor: '#ffffff', ...flex('row', 'flex-start') }}>
              <RatingComponent
                config={{ value: bookState.rating ?? 0 }}
                customProps={{ handleOnChange: handleOnChange.bind(this, 'rating') }}
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <ButtonComponent
              config={{
                type: 'submit',
                onClick: handleUpdateFavourite
              }}
              customProps={{
                variant: 'contained',
                customContainerStyle: { width: { md: '40%' } },
                customBtnStyle: {
                  width: '100%',
                  padding: 8,
                  background: 'linear-gradient(#679cf6, #4072ee)',
                  borderRadius: '41px',
                  boxShadow: 'none',
                  fontSize: '16px',
                  color: '#ffffff'
                }
              }}>
              Update
            </ButtonComponent>
          </Grid>

          <Grid item xs={12} gap={0.5} sx={{ ...flex('row', 'flex-start') }}>
            <West color='disabled' />
            <Typography variant='body2'>Return to</Typography>
            <ButtonComponent
              config={{ onClick: handleSwitchTabs }}
              customProps={{
                customContainerStyle: { margin: 0, padding: 0 },
                customBtnStyle: { padding: 0, margin: 0, textTransform: 'capitalize' }
              }}>
              Favourites
            </ButtonComponent>
          </Grid>
        </Grid>
      </FormComponent>
    </Box>
  )

  useLayoutEffect(() => {
    setHeading(PAGE_HEADING)
    setHasSearchBar(true)
    setTab('DEFAULT')
  }, [])

  useEffect(() => {
    setBookState(currentBook)
  }, [currentBook])

  return (
    <Layout
      pageHeading={heading}
      hasSearchBar={hasSearchBar}
      searchBarValue={searchBarValue}
      setSearchBarValue={setSearchBarValue}
      searchBarPrimaryAction={pagination.handleSearchByAuthorOrTitle}>
      <Box>{tab === 'DEFAULT' ? defaultTab : currentBookTab}</Box>
    </Layout>
  )
}

export default Favourites
