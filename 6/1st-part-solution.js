const fs = require('fs');
const testData = './test-input.txt'

const tuner = (input) => {
  const dataStream = fs.readFileSync(input, 'utf-8')

  let marker = {
    code: [],
    start: 1
  }
  for(i=0; i < dataStream.length; i++){
    if(i+4 <= dataStream.length){
      const currentChar = dataStream[i]
      if((marker.code).includes(currentChar)){
        marker.code = marker.code.slice(0,marker.code.indexOf(currentChar))
      }
      
        marker.code.push(currentChar)
        marker.start++
      

      if(marker.code.length === 4){
        return marker.start
      }


      // const markerHead = dataStream[i]
      // const restOfMarker = dataStream.substring(i+1,i+4)

      // if(restOfMarker.includes(markerHead)){
      //   console.log(markerHead)
      //   console.log(restOfMarker)
      //   return i+4
      // }



    }
  }



  return false


}

console.log(tuner(testData))