const fs = require('fs');
const testInput = './test-input.txt'
const input = './input.txt'
const testData = fs.readFileSync(testInput, 'utf-8')
const data = fs.readFileSync(input, 'utf-8')

const isCapital = (letter) => {
  if(letter === letter.toUpperCase()){
    return true
  }

  return false
}

const sackService = (input) => {
  const sacks = input.split('\n')
  const compartmentalizedSack = sacks.map(sack=>{
    const middleOfSack = sack.length / 2
    const sackCompOne = sack.slice(0, middleOfSack)
    const sackCompTwo = sack.slice(middleOfSack)  
    for (let index = 0; index < sackCompOne.length; index++) {
      if(sackCompOne.includes(sackCompTwo[index])){
        return isCapital(sackCompTwo[index]) ? parseInt(sackCompTwo[index], 36) + 17 : parseInt(sackCompTwo[index], 36) - 9

        
        
      }
      
    }
  })

  return compartmentalizedSack.reduce((acc, currentVal) => acc + currentVal)

  
}

const testOutput = sackService(testData)
const output = sackService(data)
console.log(output)




