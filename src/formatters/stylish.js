const stylish = (diff) => {
  const lines = diff.map((line) => {
    const { key, type, value, value1, value2 } = line
    switch (type) {
      case 'added':
        return `  + ${key}: ${value}`
      case 'deleted':
        return `  - ${key}: ${value}`
      case 'changed':
        return `  - ${key}: ${value1}\n  + ${key}: ${value2}`
      case 'unchanged':
        return `    ${key}: ${value}`
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  })

  return `{\n${lines.join('\n')}\n}`
}

export default stylish
