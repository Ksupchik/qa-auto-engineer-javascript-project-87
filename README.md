### Hexlet tests and linter status:

[![Actions Status](https://github.com/Ksupchik/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Ksupchik/qa-auto-engineer-javascript-project-87/actions)

Gendiff is a CLI tool that compares two configuration files and shows the difference. It supports JSON and YAML formats and provides output in three styles: stylish, plain, and JSON.

### Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm link` in the project directory

### Usage

Launch the utility using the `gendiff` command:

```bash
gendiff [options] <filepath1> <filepath2>
```

### Options

- `-V, --version` output the version number
- `-h, --help` display help for command
- `-f, --format <type>` output format (`stylish`, `plain`, `json`)

### Asclinema for gendiff -f stylish / default:

[![asciicast](https://asciinema.org/a/2pmX0eLaG8G4x2ot.svg)](https://asciinema.org/a/2pmX0eLaG8G4x2ot)

### Asclinema for gendiff with yaml files:

[![asciicast](https://asciinema.org/a/HdsE1YSBfOsz146D.svg)](https://asciinema.org/a/HdsE1YSBfOsz146D)

### Asclinema for gendiff -f plain:

[![asciicast](https://asciinema.org/a/VbDC1BP7hZ4Vm9vT.svg)](https://asciinema.org/a/VbDC1BP7hZ4Vm9vT)

### Asclinema for gendiff -f json:

[![asciicast](https://asciinema.org/a/O011FzMMSDl4rB2R.svg)](https://asciinema.org/a/O011FzMMSDl4rB2R)
