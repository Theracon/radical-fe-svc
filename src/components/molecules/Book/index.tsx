import { Box, Grid, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'

import { BookProps, IFavourite } from '@/types/book'
import ImageComponent from '@/components/atoms/Image'
import BookIcon from '@/assets/icons/book.svg'
import { truncateString } from '@/utils/string'
import RatingComponent from '@/components/atoms/Rating'
import { flex } from '@/utils/display'
import ButtonComponent from '@/components/atoms/Button'
import InputComponent from '@/components/atoms/Input'

const BookComponent = ({
  book,
  variant,
  props
}: {
  book: IFavourite
  variant: 'books' | 'favourites' | undefined
  props?: BookProps
}): JSX.Element => {
  const buttonSx = {
    display: 'inline',
    margin: 0,
    padding: 0,
    textTransform: 'inherit',
    color: '#5B5B5B'
  }

  return (
    <Box p={2} sx={{ width: '100%', height: '5vh', backgroundColor: '#ffffff', ...flex() }}>
      <Grid container spacing={1} sx={{ height: '100%', ...flex() }}>
        <Grid item xs={0.5}>
          <ImageComponent customProps={{ alt: 'Book Icon', src: BookIcon, width: '20px', height: '20px' }} />
        </Grid>
        <Grid item xs={variant === 'favourites' ? 5.5 : 7.5}>
          <Typography gap={0.5} sx={{ ...flex('row', 'flex-start') }}>
            <Typography variant='body2' textTransform='uppercase' sx={{ fontWeight: 700 }}>
              {truncateString(book.title)}
            </Typography>
            <Typography variant='body2'> by {truncateString(book?.author)}</Typography>
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ ...flex(variant === 'favourites' ? 'row' : 'row-reverse') }}>
          <Grid item xs={4.5} sx={{ overflowX: 'auto' }}>
            <Typography variant='body2' textTransform='uppercase' sx={{ fontWeight: 700, fontSize: '12px' }}>
              {`${book.price} GBP`}
            </Typography>
          </Grid>
          <Grid item xs={7.5}>
            <RatingComponent config={{ readOnly: true, value: book?.rating }} />
          </Grid>
        </Grid>
        {variant === 'favourites' && (
          <Grid item xs={1}>
            <ButtonComponent
              config={{ onClick: props?.updateFunction.bind(this, book) }}
              customProps={{
                customContainerStyle: buttonSx,
                customBtnStyle: buttonSx
              }}>
              Edit
            </ButtonComponent>
          </Grid>
        )}
        {variant === 'favourites' && (
          <Grid item xs={1}>
            <ButtonComponent
              config={{ onClick: props?.deleteFunction.bind(this, book.id) }}
              customProps={{
                customContainerStyle: buttonSx,
                customBtnStyle: buttonSx
              }}>
              Delete
            </ButtonComponent>
          </Grid>
        )}
        <Grid item xs={1}>
          <InputComponent
            config={{
              checked: variant === 'favourites',
              onChange: (_) => {
                if (props?.likeFunction) props?.likeFunction(book)
              }
            }}
            customProps={{ type: 'checkbox', icon: <FavoriteBorder />, checkedIcon: <Favorite /> }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

BookComponent.displayName = 'BookComponent'

export default BookComponent
