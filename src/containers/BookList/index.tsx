import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BookComponent from '@/components/molecules/Book'
import { Box, Pagination, Stack } from '@mui/material'

import { IFavourite } from '@/types/book'
import { BookListProps } from '@/types/booklist'
import { flex } from '@/utils/display'
import EmptyStateComponent from '@/components/atoms/EmptyState'
import { RootState } from '@/store'
import SpinnerComponent from '@/components/atoms/Spinner'

const BookList = ({ bookList, props }: { bookList: IFavourite[]; props?: BookListProps }): JSX.Element => {
  const { loading } = useSelector((state: RootState) => state.app)

  const [emptyStateContent, setEmptyStateContent] = useState<JSX.Element | undefined>(undefined)

  useEffect(() => {
    const content = loading ? <SpinnerComponent /> : undefined
    setEmptyStateContent(content)
  }, [loading])

  if (bookList.length === 0) {
    return (
      <Box sx={{ height: '50vh', ...flex() }}>
        <EmptyStateComponent content={emptyStateContent} />
      </Box>
    )
  }

  return (
    <React.Fragment>
      <Stack spacing={2} px={2} sx={{ ...flex('column', 'center', 'center') }}>
        {bookList.map((book) => (
          <BookComponent
            book={book}
            variant={props?.variant}
            props={{
              likeFunction: props?.likeFunction,
              updateFunction: props?.updateFunction,
              deleteFunction: props?.deleteFunction
            }}
          />
        ))}
      </Stack>
      <Box py={5} sx={{ width: '100%', ...flex() }}>
        <Pagination count={props?.totalPages} page={props?.currentPage} onChange={props?.onPageChange} />
      </Box>
    </React.Fragment>
  )
}

BookList.displayName = 'BookList'

export default BookList
