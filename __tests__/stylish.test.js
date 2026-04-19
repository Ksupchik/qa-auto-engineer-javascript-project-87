import stylish from '../src/formatters/stylish.js'

describe('stylish formatter', () => {
  const diff = [
    { key: 'follow', type: 'deleted', value: false },
    { key: 'host', type: 'unchanged', value: 'hexlet.io' },
    { key: 'proxy', type: 'deleted', value: '123.234.53.22' },
    { key: 'timeout', type: 'changed', value1: 50, value2: 20 },
    { key: 'verbose', type: 'added', value: true },
  ]

  test('should format diff to stylish string', () => {
    const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

    expect(stylish(diff)).toBe(expected)
  })

  test('should throw error for unknown type', () => {
    const invalidDiff = [{ key: 'key', type: 'invalid', value: 'none' }]

    expect(() => stylish(invalidDiff)).toThrow('Unknown type: invalid')
  })

  test('should handle empty diff', () => {
    expect(stylish([])).toBe('{\n\n}')
  })
})
