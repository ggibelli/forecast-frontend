const flatten = (obj) => {
  const array = Array.isArray(obj) ? obj : [obj]
  return array.reduce((acc, value) => {
    acc.push(value)
    if (value.children) {
      acc = acc.concat(flatten(value.children))
      delete value.children
    }
    return acc
  }, [])
}

export default flatten
