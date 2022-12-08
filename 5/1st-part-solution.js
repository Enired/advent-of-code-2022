const fs = require('fs')
const testData = './test-input.txt'
const realData = './input.txt'

const supplyStacks = (input) => {
  let data = fs.readFileSync(input, 'utf-8')

  let stackDiagram = data.split('\n\n').shift().split('\n')
  stackDiagram = stackDiagram.map(e=>e.split('\t'))
  const stackDiagramNumberPositions = stackDiagram.pop().shift().split('')

  const instructions = data.split('\n\n').pop().split('\n')


  console.log(stackDiagram)
  return stackDiagramNumberPositions
}
console.log('Test Case Stacks')
console.log(supplyStacks(testData))
console.log('\n')