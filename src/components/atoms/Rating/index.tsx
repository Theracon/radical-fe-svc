import { CustomRatingConfig } from '@/types/rating'
import { Box, Rating, RatingProps } from '@mui/material'

const RatingComponent = ({
  config,
  customProps
}: {
  config?: RatingProps
  customProps?: CustomRatingConfig
}): JSX.Element => {
  return (
    <Box>
      <Rating
        role='checkbox'
        name='book-rating'
        {...(config || {})}
        onChange={(_, value) => {
          customProps?.handleOnChange(value)
        }}
      />
    </Box>
  )
}

RatingComponent.displayName = 'RatingComponent'

export default RatingComponent
