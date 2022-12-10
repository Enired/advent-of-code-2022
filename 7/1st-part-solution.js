const fs = require('fs')
const testInput = './test-input.txt'

const measureD = (input) => {
  const terminalOutput = fs.readFileSync(testInput, 'utf-8').split('\n');
  const maxSize = 10000;
  
  const sysDirectories = {
    '/': []
  }
  
  
  //Create Directories
  terminalOutput.forEach(command => {
    if(command.includes('dir')){
      const directory = command.split(' ')[1];
      sysDirectories[directory] = [];
    }
  })
  let dirHistory = []
  let currentDir
  

  terminalOutput.forEach(command=>{
    if(command.includes('cd')){
      //Move out
      if(command.includes('..')){
        dirHistory.pop()
      }
      else{
        const cdCommand = command.split(' ')
        dirHistory.push(cdCommand[2])
      }

      currentDir = dirHistory.slice(-1)[0];
      console.log(currentDir)

    }
    else{
  
      if(!command.includes('$')){
        sysDirectories[currentDir].push(command)

      }
    }



    // console.log(dirHistory)
  })

  return sysDirectories
}

console.log(measureD(testInput)) // TestData