const util = require('util')
const exec = util.promisify(require('child_process').exec)

const program = require('commander')
const hyperlinker = require('hyperlinker')
const chalk = require('chalk')

/**
 *
 * @param err
 * @param data
 */
module.exports.default = (err, data) => {
  if (err) {
    console.error(`\n${chalk.red('This file could not be found')}\n`)
    process.exit(1)
  }

  const obj = JSON.parse(data.toString())

  // Merge dependencies and dev dependencies
  const deps = {
    ...obj.dependencies || {},
    ...obj.devDependencies || {},
  }

  // No package.json dependencies
  if (!Object.keys(deps).length > 0) {
    console.log('\nThis project doesn\'t have any dependencies.\n')
    process.exit()
  }

  // Is the `--table` active?
  const hasTableFlag = program.hasOwnProperty('table')

  console.log()

  // Loop through each of the dependencies
  Promise.all(Object.keys(deps).map(async (dep) => {
    try {
      const { stdout } = await exec(`npm view ${dep} --json`)
      const { description, homepage } = JSON.parse(stdout)

      if (hasTableFlag) {
        require('./table').default().write([
          chalk.cyan(dep),
          chalk.gray(deps[dep]),
          description,
        ])
        return
      }

      console.log(hyperlinker(chalk.cyan(dep), homepage) + chalk.gray(` (${deps[dep]})`))
      console.log(`${description}\n`)
    } catch ({ message }) {
      console.error(chalk.red(message))
      process.exit(1)
    }
  })).then(() => {
    if (hasTableFlag) {
      console.log('\n')
    }
  })
}
