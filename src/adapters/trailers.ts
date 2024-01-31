import type { Trailer } from '../types/types'

const trailers = (trailers: Trailer[]) => {
  console.log(trailers)
  const originalTrailer = trailers.find((trailer) => {
    if (
      trailer.official &&
      trailer.type === 'Trailer' &&
      trailer.site === 'YouTube'
    )
      return trailer
  })

  console.log({ originalTrailer })

  return {
    trailerID: originalTrailer!.key,
    name: originalTrailer!.name,
    type: originalTrailer!.type,
  }
}
export default trailers
