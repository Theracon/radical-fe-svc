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
  likeFunction?: any
}

export interface IFavourite extends Book {
  createdAt?: Date
  updatedAt?: Date
  rating?: number
}
