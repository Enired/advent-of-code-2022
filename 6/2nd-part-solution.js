const fs = require('fs');
const testData = './test-input.txt'
const realData = './input.txt'

const tuner = (input) => {
  const dataStream = fs.readFileSync(input, 'utf-8')

  let marker = {
    code: [],
    start: 0
  }
  for(i=0; i < dataStream.length; i++){
    if(i <= dataStream.length){
      const currentChar = dataStream[i]
      if(marker.code.includes(currentChar)){
        marker.code = marker.code.slice(marker.code.lastIndexOf(currentChar) + 1)
      }
      marker.code.push(currentChar)
      marker.start++

      if(marker.code.length===14){
        return marker
      }
    }
  }



  return marker


}

// console.log(tuner(testData))
console.log(tuner(realData))