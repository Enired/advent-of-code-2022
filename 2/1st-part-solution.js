const fs = require('fs');
const input = './input.txt';

const scoreCounter = (input) => {
  let total = 0;

  const win = 6;
  const draw = 3;
  const loss = 0;


  const rock = { opponent: 'a', me: 'x', value: 1 };
  const paper = { opponent: 'b', me: 'y', value: 2 };
  const scissors = { opponent: 'c', me: 'z', value: 3 };

  //rock beats scis 
  //paper beats rock
  //scis beats paper

  const data = fs.readFileSync(input, { encoding: 'utf-8', flag: 'r' })
  data.split('\n').forEach((match) => {
    match = match.toLocaleLowerCase().split(' ');
    const opponent = match[0].toLowerCase();
    const me = match[1].toLowerCase();
    //Rock - Draw
    if (opponent === rock.opponent & me === rock.me) {
      total += rock.value;
      total += draw;
    }
    //Rock - Win
    if (opponent === scissors.opponent & me === rock.me) {
      total += rock.value;
      total += win;
    }
    //Rock - Loss
    if (opponent === rock.opponent & me === scissors.me) {
      total += scissors.value;
      total += loss;
    }
    //Paper - Draw
    if (opponent === paper.opponent & me === paper.me) {
      total += paper.value;
      total += draw;
    }
    //Paper - Win
    if (opponent === rock.opponent & me === paper.me) {
      total += paper.value;
      total += win;
    }
    //Paper - Loss
    if (opponent === paper.opponent & me === rock.me) {
      total += rock.value;
      total += loss;
    }
    //Scissor - Draw
    if (opponent === scissors.opponent & me === scissors.me) {
      total += scissors.value;
      total += draw;
    }
    //Scissor - Win
    if (opponent === paper.opponent & me === scissors.me) {
      total += scissors.value;
      total += win;
    }
    //Scissor - Loss
    if (opponent === scissors.opponent & me === paper.me) {
      total += paper.value;
      total += loss;
    }
  });
  
  return total
};

console.log(scoreCounter(input));