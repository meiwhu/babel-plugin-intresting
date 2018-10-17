const assert = require('assert')
const babel = require('@babel/core')
const plugin = require('../lib/index')

const input = `function test() {
  console.log("helloworld");
}`

const out = `function test() {
  console.log("dlrowolleh");
}`

it('works', () => {
  const { code } = babel.transformSync(input, { plugins: [plugin] })
  assert(code == out, 'Fail')
})