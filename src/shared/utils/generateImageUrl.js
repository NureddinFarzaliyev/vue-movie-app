export const generateImageUrl = (path, size = 500) => {
  const baseUrl = 'https://image.tmdb.org/t/p/'
  return `${baseUrl}w${size}${path}`
}
