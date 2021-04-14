'use strict';

let mark = 0;
function visitor(){
  let visitorName = prompt ('what is your name').toLowerCase();
  console.log(visitorName);

  if(visitorName === 'mahmoud') {
    alert('Greeting ' + visitorName);
  } else {
    alert('Please check you answers');
  }


}

visitor();



function game(){
  let start = prompt ('can we play a game to test how much you know about me').toLowerCase();
  //console.log(start);
  if(start === 'yes' || start === 'y') {mark++;
    alert('thank you let us start');
  } else if
  (start === 'no' || start === 'n')
  {
    alert('it will be quick do not worry');
  }
}

game();

function university(){
  let first = prompt('did i study at meu?').toLowerCase();
  //console.log(first);
  if(first === 'yes' || first === 'y') { mark++;
    alert('you are correct');}
  else if(first === 'no' || first === 'n') {
    alert('the correct answer is yes it is ok:)');
  }
}
university();


function myTeam(){
  let team = prompt('is barcelona the team i support?').toLowerCase();
  //console.log(team);
  if(team === 'yes' || team === 'y') {mark++;
    alert('you are correct the best of the best');}
  else if(team === 'no' || team === 'n') {
    alert('that is wrong barcelona is the team i support');
  }
}
myTeam();

function myMajur (){
  let degree = prompt('is IT my firs majur?').toLowerCase();
  //console.log(degree);
  if(degree === 'yes' || degree === 'y') {
    alert('wrong the correct answer is civil engineer');}
  else if(degree === 'no' || degree === 'n') {mark++;
    alert('it is not it it is  civil engineer');
  }
}
myMajur();

function myNewMajur (){
  let learn = prompt('do i study software development now?').toLowerCase();
  //console.log(learn);
  if(learn === 'yes' || learn === 'y') {mark++;
    alert('you are correct and i,m happy learning about software deve;opment');}
  else if(learn === 'no' || learn === 'n') {
    alert('I study now software development and it look like a great thing');
  }
}
myNewMajur();

function myAge(){
  let num;
  let i = 0;
  do { i++;
    num = prompt('how old am i?');
    num = parseInt(num);
    if (num === 28 ) {
      alert('correct answer');
      mark++;
      break;
    }else if (num < 28) {
      alert(' too low ');
    }else if (num > 28){
      alert('too high');
    }
    if(i === 4){
      alert('used all attemps and the correct answer is 28');
    }
  } while (num !== 28 && i < 4 );
}
myAge();

let movieArray = ['gravity' , 'arrival' ,'the conjuring' ,'cast away'];
function favMovie(){
  let movieArray = ['gravity' , 'arrival' ,'the conjuring' ,'cast away'];
  let movieName;
  let j = 0;

  do {j++;
    movieName = prompt('name one movie i like').toLowerCase();

    for (let index = 0; index < movieArray.length; index++) {
      if(movieName === movieArray[index]) {
        alert('that is correct');
        mark++;
        j = 7;
        break;
      }

    }

    if( j < 6){
      alert('try again');
    }

  }while (j < 6);
}
favMovie();
alert (movieArray);
alert(mark);












