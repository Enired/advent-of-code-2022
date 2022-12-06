const fs = require('fs');
const testInput = './test-input.txt';
const input = './input.txt';
const testData = fs.readFileSync(testInput, 'utf-8');
const data = fs.readFileSync(input, 'utf-8');

const sackService = (input) => {
  const sacks = input.split('\n');
  let group = []
  const groups = [];
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  for (let index = 0; index <= sacks.length; index++) {
    if (index % 3 === 0 & index !== 0) {
      groups.push(group)
      group = [];
    }
    group.push(sacks[index]);

  }

  const badges = []
  groups.forEach(group=>{
    alphabet.forEach(letter=>{
      if(group[0].includes(letter) & group[1].includes(letter) & group[2].includes(letter)){
        badges.push(parseInt(letter, 36) + 17)
      }
      if(group[0].includes(letter.toLowerCase()) & group[1].includes(letter.toLowerCase()) & group[2].includes(letter.toLowerCase())){
        badges.push(parseInt(letter, 36) - 9)
      }
    })
  })

  // return groups
  return badges.reduce((acc, curVal) => acc + curVal)

};

const output = sackService(data);
console.log(output)




