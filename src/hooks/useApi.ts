import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { del, get, post, put } from '@/api'
import { API_BASE_URL } from '@/config/env'
import { ActionType } from '@/types/api'
import { Book, IFavourite } from '@/types/book'
import { RootState } from '@/store'
import { setCooling, setLastRequestTimeStamp, setLoading, setRequestCount } from '@/store/app/appSlice'
import { setBooks, setFavourites } from '@/store/book/bookSlice'
import { routes } from '@/constants'
import { addDaysToDate } from '@/utils/date'

export const useApi = () => {
  const { requestCount, lastRequestTimeStamp } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [lastUrl, setLastUrl] = useState<string>('')

  const handleMakeHttpRequest = async (
    action: ActionType,
    query?: string | undefined,
    rateLimitRequest?: boolean | undefined,
    requestData?: any,
    currentBookId?: string | number,
    nextFn?: Function
  ) => {
    if (rateLimitRequest && lastRequestTimeStamp) {
      const now = new Date()
      const timeDiffInSeconds = (now.getTime() - lastRequestTimeStamp.getTime()) / 1000

      if ((requestCount >= 1 && timeDiffInSeconds < 5) || (requestCount >= 2 && timeDiffInSeconds < 10)) {
        dispatch(setCooling(true))
        return
      }
    }

    try {
      dispatch(setLoading(true))
      let url = ''
      let response
      let books: Book[] | IFavourite[]
      const userId = localStorage.getItem('userId')?.replace(/"/g, '')

      switch (action) {
        case 'login':
          url = `${API_BASE_URL}/users/login`
          response = (await post(url, requestData)).data
          if (response) {
            const expiryDate = addDaysToDate(new Date(), 7).toLocaleDateString()
            localStorage.setItem('accessToken', response.token)
            localStorage.setItem('expiryDate', expiryDate)
            localStorage.setItem('userId', response.user.id)
            if (nextFn) nextFn(response)
          }
          return response

        case 'register':
          url = `${API_BASE_URL}/users/register`
          response = (await post(url, requestData)).data
          if (response) {
            const expiryDate = addDaysToDate(new Date(), 7).toLocaleDateString()
            localStorage.setItem('accessToken', response.token)
            localStorage.setItem('expiryDate', expiryDate)
            localStorage.setItem('userId', response.user.id)
            if (nextFn) nextFn(response)
          }
          return response

        case 'get-books':
          url = `${API_BASE_URL}/books/best-sellers/all`
          if (url === lastUrl) return
          setLastUrl(url)
          response = (await get(url)).data
          books = response['books']
          if (nextFn) nextFn(response)
          dispatch(setBooks(books))
          return books

        case 'get-books-w-query':
          url = `${API_BASE_URL}/books/best-sellers/all?query=${query}`
          if (url === lastUrl) return
          setLastUrl(url)
          response = (await get(url)).data
          books = response['books']
          dispatch(setBooks(books))
          if (nextFn) nextFn(response)
          return books

        case 'get-favourites':
          url = `${API_BASE_URL}/books/${userId}`
          response = (await get(url)).data
          dispatch(setFavourites(response))
          if (nextFn) nextFn(response)
          return response

        case 'add-favourite':
          url = `${API_BASE_URL}/books/${userId}`
          response = (await post(url, requestData)).data
          dispatch(setFavourites(response))
          if (nextFn) nextFn(response)
          navigate(routes.favourites)
          return response

        case 'update-favourite':
          url = `${API_BASE_URL}/books/${userId}/${currentBookId}`
          response = (await put(url, requestData)).data
          dispatch(setFavourites(response))
          if (nextFn) nextFn(response)
          navigate(routes.favourites)
          return response

        case 'delete-favourite':
          url = `${API_BASE_URL}/books/${userId}/${currentBookId}`
          response = (await del(url)).data
          dispatch(setFavourites(response))
          if (nextFn) nextFn(response)
          return response

        default:
          throw new Error('Invalid request type')
      }
    } catch (error) {
      dispatch(setLoading(false))
      throw new Error('Something went wrong')
    } finally {
      dispatch(setRequestCount(requestCount + 1))
      dispatch(setLastRequestTimeStamp(new Date()))
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    setLastUrl('')
  }, [])

  return { handleMakeHttpRequest }
}
