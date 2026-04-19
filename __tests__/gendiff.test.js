import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

describe('gendiff', () => {
  test.each([
  // JSON
    ['file1.json', 'file2.json', 'stylish', 'expected_flat.txt'],
    ['file1.json', 'file2.json', 'plain', 'expected_plain.txt'],
    ['file1.json', 'file2.json', 'json', 'expected_json.txt'],
    // YAML
    ['file1.yaml', 'file2.yaml', 'stylish', 'expected_flat.txt'],
    ['file1.yaml', 'file2.yaml', 'plain', 'expected_plain.txt'],
    ['file1.yaml', 'file2.yaml', 'json', 'expected_json.txt'],
  ])('genDiff from %s to %s (format: %s)', (file1, file2, format, expectedFile) => {
    const path1 = getFixturePath(file1)
    const path2 = getFixturePath(file2)
    const expected = readFile(expectedFile).trim()

    expect(genDiff(path1, path2, format)).toBe(expected)
  })
})
