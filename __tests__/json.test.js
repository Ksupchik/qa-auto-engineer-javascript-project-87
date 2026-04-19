import json from '../src/formatters/json.js'

describe('json formatter', () => {
  const diff = [
    { key: 'follow', type: 'deleted', value: false },
    { key: 'host', type: 'unchanged', value: 'hexlet.io' },
    { key: 'timeout', type: 'changed', value1: 50, value2: 20 },
    { key: 'verbose', type: 'added', value: true },
  ]

  test('should return full json string match', () => {
    const expected = JSON.stringify(diff, null, 2)
    const result = json(diff)

    expect(result).toBe(expected)
  })

  test('should be valid JSON and parseable back to object', () => {
    const result = json(diff)

    expect(JSON.parse(result)).toEqual(diff)
  })

  test('should handle empty diff correctly', () => {
    expect(json([])).toBe('[]')
  })
})
