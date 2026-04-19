import parse from '../src/parser.js'

describe('parse function', () => {
  test('should parse JSON correctly', () => {
    const jsonContent = '{"name": "test", "value": 123}'
    const result = parse(jsonContent, '.json')

    expect(result).toEqual({ name: 'test', value: 123 })
  })

  test('should parse YAML correctly (.yml)', () => {
    const yamlContent = 'name: test\nvalue: 123'
    const result = parse(yamlContent, '.yml')

    expect(result).toEqual({ name: 'test', value: 123 })
  })

  test('should parse YAML correctly (.yaml)', () => {
    const yamlContent = 'name: test\nvalue: 123'
    const result = parse(yamlContent, '.yaml')

    expect(result).toEqual({ name: 'test', value: 123 })
  })

  test('should throw error for unknown format', () => {
    const content = 'some content'
    const format = '.txt'

    expect(() => parse(content, format)).toThrow('Unknown format: \'.txt\'!')
  })

  test('should throw error for invalid JSON syntax', () => {
    const invalidJson = '{name: invalid}'

    expect(() => parse(invalidJson, '.json')).toThrow()
  })
})
