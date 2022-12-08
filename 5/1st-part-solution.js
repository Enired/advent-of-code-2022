const fs = require('fs')
const testData = './test-input.txt'
const realData = './input.txt'

const supplyStacks = (input) => {
  let data = fs.readFileSync(input, 'utf-8')

  const stackDiagram = data.split('\n\n').shift()
  const instructions = data.split('\n\n').pop().split('\n')
  return instructions;
}
console.log('Test Case Stacks')
console.log(supplyStacks(testData))
console.log('\n')