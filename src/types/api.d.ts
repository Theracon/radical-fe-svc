import { User } from './user'

export type ActionType =
  | 'login'
  | 'register'
  | 'get-books'
  | 'get-books-w-query'
  | 'get-favourites'
  | 'add-favourite'
  | 'update-favourite'
  | 'delete-favourite'

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export type AuthResponse = {
  token: string
  user: User
}
