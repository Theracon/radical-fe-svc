import React from 'react'
import BookComponent from '@/components/molecules/Book'
import { Box, Pagination, Stack } from '@mui/material'

import { IFavourite } from '@/types/book'
import { BookListProps } from '@/types/booklist'
import { flex } from '@/utils/display'
import EmptyStateComponent from '@/components/atoms/EmptyState'

const BookList = ({ bookList, props }: { bookList: IFavourite[]; props?: BookListProps }): JSX.Element => {
  if (bookList.length === 0) return <EmptyStateComponent />

  return (
    <React.Fragment>
      <Stack spacing={2} px={2} sx={{ ...flex('column', 'center', 'center') }}>
        {bookList.map((book) => (
          <BookComponent
            book={book}
            variant={props?.variant}
            props={{
              updateFunction: props?.updateFunction,
              deleteFunction: props?.deleteFunction,
              likeFunction: props?.likeFunction
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
