import React from 'react'
import { Box, Typography } from '@mui/material'
import { Warning } from '@mui/icons-material'

import { flex } from '@/utils/display'

const EmptyStateComponent = ({ content }: { content?: JSX.Element | string }): JSX.Element => {
  let color = '#A52A2A'

  const reasons = (
    <Typography py={1} sx={{ fontSize: '14px', color: '#808080', ...flex('column') }}>
      This may be due to one of the folowing reasons:
      <ul style={{ margin: 0, ...flex('column') }}>
        <li>There is no data to display.</li>
        <li>You've made too many requests (Wait 15 seconds and try again)</li>
      </ul>
    </Typography>
  )

  let children: JSX.Element | string = (
    <React.Fragment>
      <Warning fontSize='large' />
      <Typography variant='h6'>{content ?? 'No books to display. ☹️'}</Typography>
      <Typography variant='body2'>{content ? '' : reasons}</Typography>
    </React.Fragment>
  )

  if (content) {
    children = content
    color = '#808080'
  }

  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        height: '20vh',
        color,
        border: '5px solid #808080',
        borderRadius: '10px',
        ...flex('column')
      }}>
      {children}
    </Box>
  )
}

EmptyStateComponent.displayName = 'EmptyStateComponent'

export default EmptyStateComponent
