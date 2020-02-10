const test = require('ava')
const execa = require('execa')
const { version, description } = require('../package.json')

test('Output version', async (t) => {
  const { stdout } = await execa('./bin/cli', ['-v'])
  t.is(stdout, version)
})

test('Output help', async (t) => {
  const { stdout } = await execa('./bin/cli', ['-h'])
  t.true(stdout.includes(description))
})

test('No argument passed', async (t) => {
  const { stdout } = await execa('./bin/cli')
  t.true(stdout.includes(description))
})

test('Non-existant file', async (t) => {
  await t.throwsAsync(execa('./bin/cli', ['fake.json']))
})

test('No dependencies', async (t) => {
  await t.throwsAsync(execa('./bin/cli', ['ftest/empty.json']))
})
