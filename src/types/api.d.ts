export type ActionType =
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
