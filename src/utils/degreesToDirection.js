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
  if ((degrees >= 349 && degrees <= 360) || (degrees >= 0 && degrees <= 11))
    return 'N'
  if (degrees >= 12 && degrees <= 33) return 'NNE'
  if (degrees >= 34 && degrees <= 56) return 'NE'
  if (degrees >= 57 && degrees <= 78) return 'ENE'
  if (degrees >= 79 && degrees <= 101) return 'E'
  if (degrees >= 102 && degrees <= 123) return 'ESE'
  if (degrees >= 124 && degrees <= 146) return 'SE'
  if (degrees >= 147 && degrees <= 168) return 'SSE'
  if (degrees >= 169 && degrees <= 191) return 'S'
  if (degrees >= 192 && degrees <= 213) return 'SSW'
  if (degrees >= 214 && degrees <= 236) return 'SW'
  if (degrees >= 237 && degrees <= 258) return 'WSW'
  if (degrees >= 259 && degrees <= 281) return 'W'
  if (degrees >= 282 && degrees <= 303) return 'WNW'
  if (degrees >= 304 && degrees <= 326) return 'NW'
  if (degrees >= 327 && degrees <= 348) return 'NNW'
  return degrees
}

export default convertDegrees
