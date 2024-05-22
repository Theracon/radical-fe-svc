import {
  TextField,
  InputBaseComponentProps,
  FormControl,
  InputProps,
  InputAdornment,
  Checkbox,
  CheckboxProps
} from '@mui/material'

import { CustomInputConfig } from '@/types/input'
import IconComponent from '@/components/molecules/Icon'

const InputComponent = ({
  config,
  customProps
}: {
  config?: InputBaseComponentProps & InputProps & CheckboxProps
  customProps: CustomInputConfig
}): JSX.Element => {
  let input: JSX.Element

  const SearchIcon = (
    <svg style={{ width: '18px', height: '18px' }} viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.06505 14.3489C11.5356 14.3489 14.3489 11.5356 14.3489 8.06505C14.3489 4.59455 11.5356 1.78116 8.06505 1.78116C4.59455 1.78116 1.78116 4.59455 1.78116 8.06505C1.78116 11.5356 4.59455 14.3489 8.06505 14.3489ZM8.06505 16.1301C12.5193 16.1301 16.1301 12.5193 16.1301 8.06505C16.1301 3.61085 12.5193 0 8.06505 0C3.61085 0 0 3.61085 0 8.06505C0 12.5193 3.61085 16.1301 8.06505 16.1301Z'
        fill='#1D4A87'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16.7406 18.2182L12.7758 14.2533L14.0352 12.9938L18.0001 16.9587L16.7406 18.2182Z'
        fill='#1D4A87'
      />
    </svg>
  )

  const searchConfig = {
    startAdornment: (
      <InputAdornment position='start'>
        <IconComponent>{SearchIcon}</IconComponent>
      </InputAdornment>
    )
  }

  const inputStyle = {
    padding: '4px 12px',
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: '#ffffff',
    fontSize: '16px',
    ...(customProps.inputStyle ?? {})
  }

  switch (customProps.type) {
    case 'search':
      input = (
        <TextField
          size='small'
          inputMode='search'
          fullWidth={customProps.fullWidth}
          {...customProps}
          InputProps={{
            ...config,
            ...searchConfig,
            style: inputStyle
          }}
        />
      )
      break
    case 'checkbox':
      input = (
        <Checkbox
          sx={{
            color: '#93B4BC',
            padding: 0,
            margin: 0,
            '&.Mui-checked': {
              color: '#93B4BC'
            }
          }}
          {...config}
          {...customProps}
        />
      )
      break
    case 'text':
    default:
      input = (
        <TextField
          size='small'
          fullWidth={customProps.fullWidth}
          {...customProps}
          InputProps={{ ...config, style: inputStyle }}
        />
      )
      break
  }

  return <FormControl sx={{ width: '100%', ...(customProps.containerStyle || {}) }}>{input}</FormControl>
}

InputComponent.displayName = 'InputComponent'

export default InputComponent
