const distance = (spot, lat2, lon2) => {
  const lat1 = Number(spot.latitude)
  const lon1 = Number(spot.longitude)
  if (lat1 === lat2 && lon1 === lon2) {
    return 0
  }
  const radlat1 = (Math.PI * lat1) / 180
  const radlat2 = (Math.PI * lat2) / 180
  const theta = lon1 - lon2
  const radtheta = (Math.PI * theta) / 180
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  if (dist > 1) {
    dist = 1
  }
  dist = Math.acos(dist)
  dist = (dist * 180) / Math.PI
  dist = dist * 60 * 1.1515

  return [dist, spot.id]
}

const findClosestRegion = (array) => {
  let min = array[0]
  const arrLength = array.length
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrLength; i++) {
    const value = array[i]
    min = value[0] < min[0] ? value : min
  }
  return min
}

export default { distance, findClosestRegion }
