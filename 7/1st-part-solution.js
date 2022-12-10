const fs = require('fs')
const testInput = './test-input.txt'

const measureD = (input) => {
  const terminalOutput = fs.readFileSync(testInput, 'utf-8').split('\n');
  const maxSize = 100000;
  
  const sysDirectories = {
    '/': {
      subfolders: [],
      size: 0
    }
  }
  
  //Create Directories
  terminalOutput.forEach(command => {
    if(command.includes('dir')){
      const directory = command.split(' ')[1];
      sysDirectories[directory] = { subfolders: [],
        size: 0};
    }
  })
  let dirHistory = []
  let currentDir
  

  //Determining Size of each directory not including the size of any subfolders
  terminalOutput.forEach(command=>{
    if(command.split(' ')[1]==='cd'){
      //Move out
      if(command.includes('..')){
        dirHistory.pop()
      }
      else{
        const cdCommand = command.split(' ')
        dirHistory.push(cdCommand[2])
      }

      currentDir = dirHistory.slice(-1)[0];

    }
    else{
      if(!command.includes('$')){
        if(command.split(' ')[0]==='dir'){
          const dirLetter = command.split(' ')[1]
          sysDirectories[currentDir].subfolders.push(dirLetter)
        }
        else{
          const fileSize = parseInt(command.split(' ')[0])
          sysDirectories[currentDir].size += fileSize
          
        }
      }
    }
  })

  const subDigger = (directory) =>{
    if(directory.subfolders.length === 0){
      // console.log('yo')
      return directory.size
    }
    else{
      directory.subfolders.forEach((sub)=>{
        directory.size += subDigger(sysDirectories[sub])
      })

      console.log('hey')

    }
  }



  // Object.values(sysDirectories).forEach((dir)=>{
  //   dir.subfolders.forEach((subDir => {
  //     // dir.size += sysDirectories[subDir].size

  //     dir.size += subDigger(sysDirectories[subDir])
  //   }))
  // })

  // let total = 0;
  // Object.values(sysDirectories).forEach(dir=>{
  //   if(dir.size <= maxSize){
  //     total+=dir.size
  //   }
  // })

  Object.values(sysDirectories).forEach(directory=> {
    subDigger(directory)
  })

  console.log(sysDirectories)
  return 0
}

console.log(measureD(testInput)) // TestData