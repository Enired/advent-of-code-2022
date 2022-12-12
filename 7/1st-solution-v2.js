const fs = require('fs')
const testInput = './test-input.txt'
const realInput = './input.txt'


const measureD = (input) => {
  const terminalOutput = fs.readFileSync(input, 'utf-8').split('\n')
  const system = {

  }

  const systemPlace = ['/']

  terminalOutput.forEach(line=>{
    line = line.split(' ')

    if(line[0] === '$'){
      const command = line
    }

    if(line[0] === 'dir'){
      const dir = line
    }

    if(Boolean(parseInt(line[0]))){
      const file = line
    }
    
  })
  console.log(terminalOutput)
  console.log(system)
}

console.log(measureD(testInput))