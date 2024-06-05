export function isValidHttpUrl(link: string) {
  try {
    const newUrl = new URL(link)
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:'
  } catch (error) {
    return false
  }
}

export function isCalendlyLink(link: string) {
  const searchString = 'calendly.com/'

  if (link.includes(searchString)) {
    return true
  } else {
    return false
  }
}

export function splitCalendlyName(link: string) {
  const url = new URL(link)
  const firstPathName = url.pathname.split('/')[1]
  const secondPathName = url.pathname.split('/')[2]
  return { firstPathName, secondPathName }
}
