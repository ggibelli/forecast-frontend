/*
  N = North (349 - 011 degrees)
  NNE = North-Northeast (012-033 degrees)
  NE = Northeast (034-056 degrees)
  ENE = East-Northeast (057-078 degrees)
  E = East (079-101 degrees)
  ESE = East-Southeast (102-123 degrees)
  SE = Southeast (124-146 degrees)
  SSE = South-Southeast (147-168 degrees)
  S = South (169-191 degrees)
  SSW = South-Southwest (192-213 degrees)
  SW = Southwest (214-236 degrees)
  WSW = West-Southwest (237-258 degrees)
  W = West (259-281 degrees)
  WNW = West-Northwest (282-303 degrees)
  NW = Northwest (304-326 degrees)
  NNW = North-Northwest (327-348 degrees)
 */

const convertDegrees = (degrees) => {
  const fixedDegrees = Number(degrees.toFixed(0))
  if (
    (fixedDegrees >= 349 && fixedDegrees <= 360) ||
    (fixedDegrees >= 0 && fixedDegrees <= 11)
  )
    return 'N'
  if (fixedDegrees >= 12 && fixedDegrees <= 33) return 'NNE'
  if (fixedDegrees >= 34 && fixedDegrees <= 56) return 'NE'
  if (fixedDegrees >= 57 && fixedDegrees <= 78) return 'ENE'
  if (fixedDegrees >= 79 && fixedDegrees <= 101) return 'E'
  if (fixedDegrees >= 102 && fixedDegrees <= 123) return 'ESE'
  if (fixedDegrees >= 124 && fixedDegrees <= 146) return 'SE'
  if (fixedDegrees >= 147 && fixedDegrees <= 168) return 'SSE'
  if (fixedDegrees >= 169 && fixedDegrees <= 191) return 'S'
  if (fixedDegrees >= 192 && fixedDegrees <= 213) return 'SSW'
  if (fixedDegrees >= 214 && fixedDegrees <= 236) return 'SW'
  if (fixedDegrees >= 237 && fixedDegrees <= 258) return 'WSW'
  if (fixedDegrees >= 259 && fixedDegrees <= 281) return 'W'
  if (fixedDegrees >= 282 && fixedDegrees <= 303) return 'WNW'
  if (fixedDegrees >= 304 && fixedDegrees <= 326) return 'NW'
  if (fixedDegrees >= 327 && fixedDegrees <= 348) return 'NNW'
  return fixedDegrees
}

export default convertDegrees
