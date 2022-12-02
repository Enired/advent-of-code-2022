const fs = require('fs')
const input = './input.txt'

const scoreCounter = (input) =>{
  //Score Values
  const rock = 1
  const paper = 2
  const scissors = 3

  const win = 6
  const draw = 3
  const loss = 0

  //Symbols Left
  const a = rock
  const b = paper
  const c = scissors

  //Symbols Right
  const x = rock
  const y = paper
  const z = scissors

  fs.readFile(input, {encoding:'utf-8', flag: 'r'},(err,data)=>{
    
  })
} 

scoreCounter(input)