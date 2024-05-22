import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'

export type BookListProps = {
  variant?: 'books' | 'favourites'
  totalCount: number
  totalPages: number
  updateFunction?: any
  deleteFunction?: any
  likeFunction?: FormEventHandler<HTMLInputElement> &
    ChangeEventHandler<HTMLInputElement> &
    ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
  currentPage?: number
  onPageChange?: (event: React.ChangeEvent<unknown>, value: number) => void
}
