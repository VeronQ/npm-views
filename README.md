# NPM Views

> List and describe project dependencies

[![npm version](https://badge.fury.io/js/npm-views.svg)](https://npmjs.org/package/npm-views "View this project on npm")
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/VeronQ/npm-views/blob/master/LICENSE)
 
![Demo CLI](../assets/screenshot.png?raw=true)

## Prerequisite

* `Node.js` >= 8.0.0
* `npm` >= 6.0.0
 
## Installation

```sh
$ npm install -g npm-views
```

## Usage

```
$ npm-views --help

  Usage: npm-views <filePath>
  
  List and describe project dependencies
  
  Options:
    -v, --version  output the version number
    -t, --table    view in a table format
    -h, --help     output usage information
```

## Example

**Output in a table format**

```sh
$ npm-views my-app/src/package.json --table
```

## License

MIT
