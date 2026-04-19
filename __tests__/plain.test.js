import plain from '../src/formatters/plain.js'

describe('plain formatter', () => {
  const diff = [
    { key: 'follow', type: 'added', value: false },
    { key: 'host', type: 'unchanged', value: 'hexlet.io' },
    { key: 'proxy', type: 'deleted', value: '123.234.53.22' },
    { key: 'timeout', type: 'changed', value1: 50, value2: 20 },
    { key: 'verbose', type: 'added', value: 'hello' },
  ]

  test('should format diff to plain text and filter unchanged', () => {
    const expected = [
      'Property \'follow\' was added with value: false',
      'Property \'proxy\' was removed',
      'Property \'timeout\' was updated. From 50 to 20',
      'Property \'verbose\' was added with value: \'hello\'',
    ].join('\n')

    expect(plain(diff)).toBe(expected)
  })

  test('stringify should wrap strings in quotes and keep other types as is', () => {
    const diffWithTypes = [
      { key: 'string', type: 'added', value: 'value' },
      { key: 'number', type: 'added', value: 100 },
      { key: 'boolean', type: 'added', value: true },
    ]

    const result = plain(diffWithTypes)

    expect(result).toContain('with value: \'value\'')
    expect(result).toContain('with value: 100')
    expect(result).toContain('with value: true')
  })

  test('should throw error for unknown type', () => {
    const invalidDiff = [{ key: 'key', type: 'unknown' }]

    expect(() => plain(invalidDiff)).toThrow('Unknown type: unknown')
  })

  test('should return empty string for empty diff or only unchanged items', () => {
    const onlyUnchanged = [{ key: 'a', type: 'unchanged', value: 1 }]

    expect(plain([])).toBe('')
    expect(plain(onlyUnchanged)).toBe('')
  })
})
