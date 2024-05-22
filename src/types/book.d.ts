import { ChangeEvent, ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'

export type Book = {
  id?: string | number
  title?: string
  author?: string
  price?: string
}

export type BookProps = {
  updateFunction?: any
  deleteFunction?: any
  likeFunction?: FormEventHandler<HTMLInputElement> &
    ChangeEventHandler<HTMLInputElement> &
    ((event: ChangeEvent<HTMLInputElement>, checked: boolean) => void)
}

export interface IFavourite extends Book {
  createdAt?: Date
  updatedAt?: Date
  rating?: number
}
