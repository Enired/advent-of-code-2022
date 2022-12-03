const fs = require('fs');
const input = './input.txt';

const scoreCounter = (input) => {
  let total = 0;

  const win = {symbol: 'z', value: 6};
  const draw = {symbol: 'y', value: 3};
  const loss = {symbol: 'x', value: 0};


  const rock = { opponent: 'a', value: 1 };
  const paper = { opponent: 'b', value: 2 };
  const scissors = { opponent: 'c', value: 3 };

  //rock beats scis 
  //paper beats rock
  //scis beats paper

  const data = fs.readFileSync(input, { encoding: 'utf-8', flag: 'r' })
  data.split('\n').forEach((match) => {
    match = match.toLocaleLowerCase().split(' ');
    const opponent = match[0].toLowerCase();
    const matchOutcome = match[1].toLowerCase();
    //Rock - Draw
    if (opponent === rock.opponent & matchOutcome === draw.symbol) {
      total += rock.value;
      total += draw.value;
    }
    
    //Rock - Win
    if (opponent === rock.opponent & matchOutcome === win.symbol) {
      total += paper.value;
      total += win.value;
    }
    
    //Rock - Loss
    if (opponent === rock.opponent & matchOutcome === loss.symbol) {
      total += scissors.value;
      total += loss.value;
    }
    //Paper - Draw
    if (opponent === paper.opponent & matchOutcome === draw.symbol) {
      total += paper.value;
      total += draw.value;
    }
    
    //Paper - Win
    if (opponent === paper.opponent & matchOutcome === win.symbol) {
      total += scissors.value;
      total += win.value;
    }
    
    //Paper - Loss
    if (opponent === paper.opponent & matchOutcome === loss.symbol) {
      total += rock.value;
      total += loss.value;
    }
    //Scissors - Draw
    if (opponent === scissors.opponent & matchOutcome === draw.symbol) {
      total += scissors.value;
      total += draw.value;
    }
    
    //Scissors - Win
    if (opponent === scissors.opponent & matchOutcome === win.symbol) {
      total += rock.value;
      total += win.value;
    }
    
    //Scissors - Loss
    if (opponent === scissors.opponent & matchOutcome === loss.symbol) {
      total += paper.value;
      total += loss.value;
    }
  });
  
  return total
};

console.log(scoreCounter(input));