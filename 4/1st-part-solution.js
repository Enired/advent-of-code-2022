const fs = require('fs');
const testData = './test-input.txt'

const cleanup = (data) => {
  let cleanupAssignments = fs.readFileSync(data,'utf-8').split('\n')
  let count = 0;
  cleanupAssignments = cleanupAssignments.map(pair => {
    const locationOfComma = pair.indexOf(',')
    const assignment = {
      left: {min: pair.slice(0, locationOfComma).split('-')[0], max: pair.slice(0, locationOfComma).split('-')[1]},
      right: {min: pair.slice(locationOfComma + 1).split('-')[0], max: pair.slice(locationOfComma + 1).split('-')[1]}
    }

    return assignment
  })



  cleanupAssignments.forEach(pair=>{
    if(pair.left.min <= pair.right.min & pair.left.max >= pair.right.max){
      count++
    }
    if(pair.left.min >= pair.right.min & pair.left.max <= pair.right.max){
      count++
    }

  })

  return count

}

console.log(cleanup(testData))