const fs = require('fs')
const testData = './test-input.txt'
const realData = './input.txt'

const supplyStacks = (input) => {
  let data = fs.readFileSync(input, 'utf-8')

  let stackDiagram = data.split('\n\n').shift().split('\n')
  stackDiagram = stackDiagram.map(e=>e.split('\t'))
  stackDiagram.pop()
  let stackObj = {}
  let counter = Math.ceil(stackDiagram[0][0].length / 4 )
  while(counter > 0){
    stackObj[counter] = []
    counter --
  }


  stackDiagram.reverse().forEach((stack,index) => {
    let stackNumber = 1
    for(let i = 1; i < stack[0].length; i+=4){
      stackObj[stackNumber].push(stack[0][i])
      stackNumber++
    }

    stackNumber = 1
  })

  // console.log(stackObj)

  let instructions = data.split('\n\n').pop().split('\n')
  instructions = instructions.map(instruction=>{
    instruction = instruction.slice(instruction.indexOf(' ') + 1)
    const amountToMove = parseInt(instruction.slice(0, instruction.indexOf(' ')))
    instruction = instruction.slice(instruction.indexOf(' ') + 1)
    instruction = instruction.slice(instruction.indexOf(' ') + 1)
    const stackToTakeFrom = parseInt(instruction.slice(0, instruction.indexOf(' ')))
    instruction = instruction.slice(instruction.indexOf(' ') + 1)
    instruction = instruction.slice(instruction.indexOf(' ') + 1)
    const stackToMoveTo = parseInt(instruction[0])
    return   {
      amountToMove,
      stackToTakeFrom,
      stackToMoveTo
    }
  })

  // console.log(instructions)

  

  instructions.forEach(instruction=>{
    let counter = 0;
    while(counter < instruction.amountToMove){
      while(stackObj[instruction.stackToTakeFrom][stackObj[instruction.stackToTakeFrom].length -1] === ' '){
        stackObj[instruction.stackToTakeFrom].pop()

      }
  
      stackObj[instruction.stackToMoveTo].push(stackObj[instruction.stackToTakeFrom].pop())
      counter++
    }
  })

  return Object.values(stackObj).map(val=>{
    while(val[val.length-1] === ' '){
      val.pop()
    }

    return val.slice(-1)

  }).join('')





  return null
}
console.log('Test Case Stacks')
console.log(supplyStacks(realData))
console.log('\n')