export const truncateString = (str?: string, charLength: number = 20): string => {
  if (!str) return ''

  if (str.length < charLength) return str

  let newStr = str.slice(0, charLength + 1)
  newStr += '...'

  return newStr
}
