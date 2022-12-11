const { dir } = require('console');
const fs = require('fs')
const testInput = './test-input.txt'

const measureD = (input) => {
  const terminalOutput = fs.readFileSync(testInput, 'utf-8').split('\n');
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


  const subFolderSize = (folder) => { //Object of the contents 
    let addToParent = 0
    console.log(folder.name)
    if(folder.subfolders.length === 0){
      return folder.size

      // folder.subfolders.forEach((subfolder)=>{
      //   folder.size += sysDirectories[subfolder].size
      // })
      // folder.subfolders.forEach((subfolder)=>{
      //   folder.size += sysDirectories[subfolder].size
      // })
      
    }
    else{
      folder.subfolders.forEach((subfolder)=>{
        const subfolderObj = sysDirectories[subfolder]
        addToParent += subFolderSize(subfolderObj)

      })
    }
    return addToParent
  }

  Object.values(sysDirectories).forEach((val)=>{
    val.size += subFolderSize(val)
   
    // console.log(val.subfolders)
  })


  console.log(sysDirectories)
  return 0
}

console.log(measureD(testInput)) // TestData