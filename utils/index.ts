export const isLikelyURL = (str?: string): boolean => {
  if (!str) return false
  return str.startsWith('http://') || str.startsWith('https://')
}

export const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
