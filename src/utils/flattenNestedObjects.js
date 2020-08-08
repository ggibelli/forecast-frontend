const flatten = (obj) => {
  const array = Array.isArray(obj) ? obj : [obj]
  return array.reduce((acc, value) => {
    acc.push(value)
    if (value.children) {
      // eslint-disable-next-line no-param-reassign
      acc = acc.concat(flatten(value.children))
      // eslint-disable-next-line no-param-reassign
      delete value.children
    }
    return acc
  }, [])
}

export default flatten
