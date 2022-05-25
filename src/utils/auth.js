export function getToken() {
  if (!process.server) {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      return userData.token
    } else {
      return ''
    }
  } else {
    return ''
  }
}