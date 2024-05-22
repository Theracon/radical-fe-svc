import { flex } from '@/utils/display'
import { Box, Typography } from '@mui/material'

const EmptyStateComponent = (): JSX.Element => {
  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        height: '50px',
        color: '#777777',
        border: '1px dotted #777777',
        borderRadius: '10px',
        ...flex()
      }}>
      <Typography variant='h6'>No items to display. ☹️</Typography>
    </Box>
  )
}

EmptyStateComponent.displayName = 'EmptyStateComponent'

export default EmptyStateComponent
