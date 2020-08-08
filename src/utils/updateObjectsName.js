const updateDisplayNameToLabel = (val, keysMap) => {
  if (val == null) return null
  if (Array.isArray(val)) {
    return val.map((item) => updateDisplayNameToLabel(item, keysMap))
  }
  if (typeof val === 'object') {
    return Object.keys(val).reduce((obj, key) => {
      const propKey = updateDisplayNameToLabel(key, keysMap)
      const propVal = updateDisplayNameToLabel(val[key], keysMap)
      // eslint-disable-next-line no-param-reassign
      obj[propKey] = propVal
      return obj
    }, {})
  }
  if (typeof val === 'string') {
    return keysMap[val] || val
  }
  return val
}

export default updateDisplayNameToLabel
