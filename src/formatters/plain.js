const stringify = (value) => {
  if (typeof value === 'string') return `'${value}'`
  return String(value)
}

const plain = (diff) => {
  const lines = diff
    .filter(node => node.type !== 'unchanged')
    .map((node) => {
      const { key, type, value, value1, value2 } = node
      const property = `Property '${key}'`

      switch (type) {
        case 'added':
          return `${property} was added with value: ${stringify(value)}`
        case 'deleted':
          return `${property} was removed`
        case 'changed':
          return `${property} was updated. From ${stringify(value1)} to ${stringify(value2)}`
        default:
          throw new Error(`Unknown type: ${type}`)
      }
    })

  return lines.join('\n')
}

export default plain
