import React from 'react'
import { Box, Stack } from '@mui/material'

import { flex } from '@/utils/display'
import HeartIcon from '@/assets/icons/heart.svg'
import SettingsIcon from '@/assets/icons/settings.svg'
import StatsIcon from '@/assets/icons/stats.svg'
import ButtonComponent from '@/components/atoms/Button'
import ImageComponent from '@/components/atoms/Image'
import { routes } from '@/constants'
import SeparatorComponent from '@/components/atoms/Separator'
import { IStyle } from '@/types'

const SideBarComponent = ({
  activeButton,
  buttons,
  containerStyle
}: {
  activeButton: string
  buttons?: { icon: string; route: string }[]
  containerStyle?: IStyle
}): JSX.Element => {
  if (!buttons) {
    buttons = [
      { icon: StatsIcon, route: routes.dashboard },
      { icon: HeartIcon, route: routes.favourites },
      { icon: SettingsIcon, route: routes.settings }
    ]
  }

  const activeBtnStyle = {
    background: 'linear-gradient(#679cf6, #4072ee)',
    width: '100%',
    paddingLeft: 1.25,
    paddingRight: 1.25,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    ...flex()
  }

  return (
    <Box
      zIndex={10}
      position='absolute'
      sx={{
        width: '5.63vw',
        height: '100vh',
        backgroundColor: '#454664',
        ...(containerStyle ?? {}),
        ...flex('column')
      }}>
      <Stack width={'100%'} sx={{ ...flex('column') }}>
        {buttons.map(({ icon, route }, index) => (
          <React.Fragment key={index}>
            <ButtonComponent
              key={index}
              config={{}}
              customProps={{
                type: 'link',
                linkTo: route,
                customContainerStyle: activeButton === route ? activeBtnStyle : {}
              }}>
              <ImageComponent
                customProps={{
                  alt: 'Side bar icon',
                  src: icon,
                  width: 24,
                  height: 24
                }}
              />
            </ButtonComponent>
            <SeparatorComponent width='20%' />
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  )
}

SideBarComponent.displayName = 'SideBarComponent'

export default SideBarComponent
