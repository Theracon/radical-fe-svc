import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { get } from '@/api'
import { API_BASE_URL } from '@/config/env'
import { ActionType } from '@/types/api'
import { Book, IFavourite } from '@/types/book'
import { RootState } from '@/store'
import { setCooling, setLastRequestTimeStamp, setRequestCount } from '@/store/app/appSlice'

export const useApi = () => {
  const { requestCount, lastRequestTimeStamp } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()
  const [lastUrl, setLastUrl] = useState<string>('')

  const handleMakeHttpRequest = async (action: ActionType, query?: string | undefined) => {
    if (lastRequestTimeStamp) {
      const now = new Date()
      const timeDiffInSeconds = (now.getTime() - lastRequestTimeStamp.getTime()) / 1000

      if ((requestCount >= 1 && timeDiffInSeconds < 5) || (requestCount >= 2 && timeDiffInSeconds < 10)) {
        dispatch(setCooling(true))
        return
      }
    }

    try {
      let url = ''
      let response
      let books: Book[] | IFavourite[]

      switch (action) {
        case 'get-books':
          url = `${API_BASE_URL}/books/best-sellers/all`
          if (url === lastUrl) return
          setLastUrl(url)
          response = (await get(url)).data
          books = response['books']
          return books
        case 'get-books-w-query':
          url = `${API_BASE_URL}/books/best-sellers/all?query=${query}`
          if (url === lastUrl) return
          setLastUrl(url)
          response = (await get(url)).data
          books = response['books']
          return books
        case 'get-favourites':
          break
        case 'add-favourite':
          break
        case 'update-favourite':
          break
        case 'delete-favourite':
          break
        default:
          throw new Error('Invalid action type')
      }
    } catch (error) {
      throw new Error('Something went wrong')
    } finally {
      dispatch(setRequestCount(requestCount + 1))
      dispatch(setLastRequestTimeStamp(new Date()))
    }
  }

  useEffect(() => {
    setLastUrl('')
  }, [])

  return {
    handleMakeHttpRequest
  }
}
