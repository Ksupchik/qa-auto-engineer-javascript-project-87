#!/usr/bin/env node

import { Command } from 'commander'
import { readFileSync } from 'fs'
import path from 'path'
import genDiff from '../src/index.js'

const packagePath = path.resolve(process.cwd(), 'package.json')
const { version } = JSON.parse(readFileSync(packagePath, 'utf-8'))

const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version, '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((path1, path2, options) => {
    console.log(genDiff(path1, path2, options.format))
  })

program.parse(process.argv)
