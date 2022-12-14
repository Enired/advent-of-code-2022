const fs = require('fs')
const testInput = './test-input.txt'
const realInput = './input.txt'

const measureD = (input) => {
  const terminalOutput = fs.readFileSync(input, 'utf-8').split('\n');
  const maxSize = 100000;
  
  const sysDirectories = {
    '/': {
      name: '/',
      subfolders: [],
      size: 0
    }
  }
  
  //Create Directories
  terminalOutput.forEach(command => {
    if(command.includes('dir')){
      const directory = command.split(' ')[1];
      sysDirectories[directory] = { 
        name: directory,
        subfolders: [],
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


  let depth = 0;
  const addSubFolderSize = (folder) => { //Object of the contents 
    let folderSize = folder.size
    const subfolders = folder.subfolders

    depth++
    console.log(depth)
    if(subfolders.length !== 0){
      for(let i = 0; i<subfolders.length; i++){
        folderSize += addSubFolderSize(sysDirectories[subfolders[i]])

      }
    }

    return folderSize

  }

  const contentOfSys = Object.values(sysDirectories)

  contentOfSys.forEach((content)=>{
    content.size = addSubFolderSize(content)
  })

  
  let total= 0
  
  contentOfSys.forEach((content)=>{
    if(content.size <= maxSize){
      total += content.size
    }
  })
  console.log(sysDirectories)
  // return 0
  return total
}

console.log(measureD(testInput)) // TestData
// console.log(measureD(realInput)) // TestData