import React, { FormHTMLAttributes } from 'react'
import { Box } from '@mui/material'

import { CustomFormConfig } from '@/types/form'
import { flex } from '@/utils/display'

const FormComponent = ({
  config,
  customProps,
  children
}: {
  config?: FormHTMLAttributes<HTMLFormElement>
  customProps?: CustomFormConfig
  children: JSX.Element | JSX.Element[]
}): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (config?.onSubmit) {
      const request = customProps?.httpRequestConfig
      console.log(request?.data)
      alert('submitted!')
      config.onSubmit(e)
    }
  }

  return (
    <Box sx={{ width: '100%', ...(customProps?.containerStyle ?? {}), ...flex() }}>
      <form style={{ width: '100%', ...flex() }} {...config} onSubmit={handleSubmit}>
        {children}
      </form>
    </Box>
  )
}

FormComponent.displayName = 'FormComponent'

export default FormComponent
