import { Book, IFavourite } from '@/types/book'

/* Routes for in-app navigation */
export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  favourites: '/favourites',
  settings: '/settings'
}

export const authRoutes = [routes.dashboard, routes.favourites, routes.settings]

export const theme = {
  colors: {
    primary: '#93B4BC',
    'secondary-main': '#679CF6',
    'secondary-alt': '#4072EE',
    tertiary: '#5B5B5B',
    white: '#FFFFFF'
  }
}

export const DUMMY_BOOK_LIST: Book[] = [
  {
    id: 1,
    title: 'Billy Summers',
    author: 'Stephen King',
    price: '8 GBP'
  },
  {
    id: 2,
    title: 'Vortex',
    author: 'Catherine Coulter',
    price: '19 GBP'
  },
  {
    id: 3,
    title: 'I Alone Can Fix It',
    author: 'Carole Leoning and Philip Rockerlia',
    price: '15 GBP'
  },
  {
    id: 4,
    title: 'American Marxism',
    author: 'Mark R. Levin',
    price: '11 GBP'
  },
  {
    id: 5,
    title: 'Billy Summers',
    author: 'Stephen King',
    price: '8 GBP'
  },
  {
    id: 6,
    title: 'Vortex',
    author: 'Catherine Coulter',
    price: '19 GBP'
  },
  {
    id: 7,
    title: 'I Alone Can Fix It',
    author: 'Carole Leoning and Philip Rockerlia',
    price: '15 GBP'
  },
  {
    id: 8,
    title: 'American Marxism',
    author: 'Mark R. Levin',
    price: '11 GBP'
  },
  {
    id: 9,
    title: 'Billy Summers',
    author: 'Stephen King',
    price: '8 GBP'
  },
  {
    id: 10,
    title: 'Vortex',
    author: 'Catherine Coulter',
    price: '19 GBP'
  },
  {
    id: 11,
    title: 'I Alone Can Fix It',
    author: 'Carole Leoning and Philip Rockerlia',
    price: '15 GBP'
  },
  {
    id: 12,
    title: 'American Marxism',
    author: 'Mark R. Levin',
    price: '11 GBP'
  },
  {
    id: 13,
    title: 'Billy Summers',
    author: 'Stephen King',
    price: '8 GBP'
  },
  {
    id: 14,
    title: 'Vortex',
    author: 'Catherine Coulter',
    price: '19 GBP'
  },
  {
    id: 15,
    title: 'I Alone Can Fix It',
    author: 'Carole Leoning and Philip Rockerlia',
    price: '15 GBP'
  },
  {
    id: 16,
    title: 'American Marxism',
    author: 'Mark R. Levin',
    price: '11 GBP'
  }
]

export const DUMMY_FAVOURITES_LIST: IFavourite[] = [
  {
    id: 1,
    title: 'Billy Summers',
    author: 'Stephen King',
    price: '8 GBP',
    rating: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: 'Vortex',
    author: 'Catherine Coulter',
    price: '19 GBP',
    rating: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: 'I Alone Can Fix It',
    author: 'Carole Leoning and Philip Rockerlia',
    price: '12 GBP',
    rating: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    title: 'American Marxism',
    author: 'Mark R. Levin',
    price: '23 GBP',
    rating: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    title: 'Finish Yhat You Started',
    author: 'Querone Mag',
    price: '8 GBP',
    rating: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    title: "Who's There?",
    author: 'Abe Waddington',
    price: '40 GBP',
    rating: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
