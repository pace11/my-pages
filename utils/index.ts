export const isLikelyURL = (str?: string): boolean => {
  if (!str) return false
  return str.startsWith('http://') || str.startsWith('https://')
}
