const SeparatorComponent = ({ width = '100%', color = '#E8F0F8' }): JSX.Element => {
  return <hr style={{ width, color, margin: 0 }} />
}

SeparatorComponent.displayName = 'SeparatorComponent'

export default SeparatorComponent
