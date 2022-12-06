const fs = require('fs');
const testData = './test-input.txt';
const realData = './input.txt';

const cleanup = (data) => {
  let cleanupAssignments = fs.readFileSync(data, 'utf-8').split('\n');
  let count = 0;
  cleanupAssignments = cleanupAssignments.map(pair => {
    const locationOfComma = pair.indexOf(',');
    const assignment = {
      left: { min: parseInt(pair.slice(0, locationOfComma).split('-')[0]), max: parseInt(pair.slice(0, locationOfComma).split('-')[1]) },
      right: { min: parseInt(pair.slice(locationOfComma + 1).split('-')[0]), max: parseInt(pair.slice(locationOfComma + 1).split('-')[1]) }
    };

    return assignment;
  });



  cleanupAssignments.forEach(pair => {
    const leftMin = pair.left.min;
    const leftMax = pair.left.max;
    const rightMin = pair.right.min;
    const rightMax = pair.right.max;

    //Case: Range of Right is fully within range of left
    if (
      (leftMin <= rightMin & leftMax >= rightMin) || (rightMin <= leftMin & rightMax >= leftMin)
    ) {
      return count++;
    }
  });

  return count;

};

console.log('Test', cleanup(testData))
console.log('Real', cleanup(realData))