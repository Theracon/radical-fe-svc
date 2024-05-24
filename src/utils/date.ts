export const addDaysToDate = (date: Date, days: number) => {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export const tokenExpired = (token: string) => {
  const decode = JSON.parse(atob(token.split('.')[1]))
  console.log(decode)
  return decode.exp * 1000 < new Date().getTime()
}
