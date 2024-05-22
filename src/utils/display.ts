export const flex = (
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse' = 'row',
  justify: string = 'center',
  align: string = 'center'
) => {
  return {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align
  }
}
