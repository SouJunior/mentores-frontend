export function isValidHttpsUrl(link: string) {
  try {
    const newUrl = new URL(link)
    return newUrl.protocol === 'https:'
  } catch (error) {
    return false
  }
}

export function isCalendlyLink(link: string) {
  try {
    const url = new URL(link)
    const firstPathName = url.pathname.split('/')[1]
    const secondPathName = url.pathname.split('/')[2]
    return (
      url.hostname === 'calendly.com' &&
      firstPathName.length > 0 &&
      secondPathName.length > 0
    )
  } catch (error) {
    console.error('Invalid Url: ', error)
    return false
  }
}

export function splitCalendlyName(link: string) {
  const url = new URL(link)
  const firstPathName = url.pathname.split('/')[1]
  const secondPathName = url.pathname.split('/')[2]
  return { firstPathName, secondPathName }
}
