import FormComponent from '../Form'
import InputComponent from '@/components/atoms/Input'
import { IStyle } from '@/types'

const SearchBarComponent = ({
  customInputStyle = {},
  searchQuery,
  setSearchQuery
}: {
  customInputStyle?: IStyle
  searchQuery: string
  setSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => {
  return (
    <FormComponent>
      <InputComponent
        config={{
          value: searchQuery,
          onChange: setSearchQuery
        }}
        customProps={{
          type: 'search',
          placeholder: 'What books would you like to find?',
          fullWidth: true,
          inputStyle: {
            borderTopLeftRadius: '41px',
            borderBottomLeftRadius: '41px',
            ...customInputStyle
          }
        }}
      />
    </FormComponent>
  )
}

SearchBarComponent.displayName = 'SearchBarComponent'

export default SearchBarComponent
