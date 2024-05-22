import { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Grid, Stack, Typography } from '@mui/material'

import NavBarComponent from '@/components/molecules/NavBar'
import SideBarComponent from '@/components/molecules/SideBar'
import SearchBarComponent from '@/components/molecules/SearchBar'
import { flex } from '@/utils/display'
import ButtonComponent from '@/components/atoms/Button'

const Layout = ({
  pageHeading = '',
  hasSearchBar = true,
  searchBarPrimaryAction,
  children
}: {
  pageHeading?: JSX.Element | string
  hasSearchBar?: boolean
  searchBarPrimaryAction?: (query: string) => void
  children?: JSX.Element | JSX.Element[]
}): JSX.Element => {
  const [activeSidebarBtn, setActiveSidebarBtn] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { pathname } = useLocation()

  useLayoutEffect(() => {
    setActiveSidebarBtn(pathname)
  }, [pathname])

  return (
    <Stack position='relative'>
      <NavBarComponent />
      <SideBarComponent activeButton={activeSidebarBtn} />
      <Box
        position='absolute'
        py={5}
        sx={{
          top: { md: '8.18vh' },
          left: { md: '5.63vw' },
          width: { md: '94.37vw', height: { md: '91.82vh' } }
        }}>
        <Box width='100%'>
          <Grid container spacing={5} width='100%' sx={{ ...flex() }}>
            <Grid item xs={12} md={9}>
              <Typography sx={{ fontWeight: 700 }}>{pageHeading}</Typography>
            </Grid>
            {hasSearchBar && (
              <Grid item xs={12} md={9} sx={{ ...flex() }}>
                <SearchBarComponent
                  customInputStyle={{
                    height: '5vh',
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                  }}
                  searchQuery={searchQuery}
                  setSearchQuery={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
                <ButtonComponent
                  config={{
                    type: 'submit',
                    onClick: searchBarPrimaryAction?.bind(this, searchQuery)
                  }}
                  customProps={{
                    variant: 'contained',
                    customBtnStyle: {
                      backgroundColor: '#93b4bc',
                      height: '5vh',
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      borderTopRightRadius: '41px',
                      borderBottomRightRadius: '41px',
                      outline: 'none',
                      boxShadow: 'none'
                    }
                  }}>
                  GO
                </ButtonComponent>
              </Grid>
            )}
            {children && (
              <Grid item xs={12} md={9}>
                {children}
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Stack>
  )
}

Layout.displayName = 'Layout'

export default Layout
