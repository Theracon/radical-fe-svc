import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle } from '@mui/material'

import ButtonComponent from '@/components/atoms/Button'
import { CustomDialogConfig } from '@/types/dialog'

const DialogComponent = ({
  config,
  customProps
}: {
  config: DialogProps
  customProps: CustomDialogConfig
}): JSX.Element => {
  return (
    <Box>
      <Dialog {...config}>
        <DialogTitle>{customProps.title || 'Proceed?'}</DialogTitle>
        <DialogContent>
          <DialogContentText>{customProps.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent config={{ onClick: customProps.secondaryAction }}>Close</ButtonComponent>
          <ButtonComponent config={{ onClick: customProps.primaryAction }}>Confirm</ButtonComponent>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

DialogComponent.displayName = 'ModalComponent'

export default DialogComponent
