import { Box } from '@mui/material'
import { CustomImageConfig } from '@/types/image'
import { flex } from '@/utils/display'

const ImageComponent = ({ customProps }: { customProps?: CustomImageConfig }): JSX.Element => {
  const imageStyle = {
    width: customProps?.width ?? '100%',
    Height: customProps?.height ?? '100%',
    borderRadius: customProps?.borderRadius ?? 0
  }

  const overlay = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        backgroundColor: '#444444',
        opacity: 0.7,
        color: '#ffffff',
        fontSize: '24px',
        ...flex()
      }}>
      {customProps?.overlayContent}
    </Box>
  )

  return (
    <Box position='relative'>
      <img
        src={customProps?.src}
        alt={customProps?.alt ?? 'A Radical Company image'}
        style={{ ...imageStyle }}
        loading='lazy'
      />
      {customProps?.includeOverlay && overlay}
    </Box>
  )
}

ImageComponent.displayName = 'ImageComponent'

export default ImageComponent
