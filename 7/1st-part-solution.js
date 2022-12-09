const fs = require('fs')
const testInput = './test-input.txt'

const measureD = (input) => {
  const terminalOutput = fs.readFileSync(testInput, 'utf-8');

  return terminalOutput
}