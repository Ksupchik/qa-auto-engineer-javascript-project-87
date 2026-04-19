import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import parse from './parser.js'
import format from './formatters/index.js'

const getData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const content = fs.readFileSync(absolutePath, 'utf-8')
  const ext = path.extname(filepath)

  return parse(content, ext)
}

const genDiff = (path1, path2, formatName = 'stylish') => {
  const data1 = getData(path1)
  const data2 = getData(path2)

  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)))

  const diff = keys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] }
    }

    if (!_.has(data2, key)) {
      return { key, type: 'deleted', value: data1[key] }
    }

    if (data1[key] !== data2[key]) {
      return { key, type: 'changed', value1: data1[key], value2: data2[key] }
    }

    return { key, type: 'unchanged', value: data1[key] }
  })

  return format(diff, formatName)
}

export default genDiff
