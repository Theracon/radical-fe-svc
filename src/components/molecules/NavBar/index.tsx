import { Avatar, Box } from '@mui/material'

import ImageComponent from '@/components/atoms/Image'
import Logo from '@/assets/images/logo.svg'
import UserAvatar from '@/assets/images/user.svg'
import { flex } from '@/utils/display'

const NavBarComponent = (): JSX.Element => {
  return (
    <Box
      zIndex={100}
      position='absolute'
      sx={{
        backgroundColor: '#ffffff',
        width: '100%',
        height: '8.18vh',
        ...flex('row', 'flex-start', 'center')
      }}
      gap={5}>
      <Box sx={{ backgroundColor: '#93B4BC', width: '5.63vw', height: '8.18vh', ...flex('row', 'center', 'center') }}>
        <Avatar src={UserAvatar} sx={{ width: 40, height: 40 }} />
      </Box>
      <ImageComponent
        customProps={{
          src: Logo,
          width: 100,
          height: 100
        }}
      />
    </Box>
  )
}

NavBarComponent.displayName = 'NavBarComponent'

export default NavBarComponent
