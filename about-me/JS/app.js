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




let start = prompt ('can we play a game to test how much you know about me').toLowerCase();
//console.log(start);
if(start === 'yes' || start === 'y') {mark++;
  alert('thank you let us start');
} else if
(start === 'no' || start === 'n')
{
  alert('it will be quick do not worry');
}




let first = prompt('did i study at meu?').toLowerCase();
//console.log(first);
if(first === 'yes' || first === 'y') { mark++;
  alert('that is great');}
else if(first === 'no' || first === 'n') {
  alert('it is ok the currect answer is meu');
}

let team = prompt('is barcelona the team i support').toLowerCase();
//console.log(team);
if(team === 'yes' || team === 'y') {mark++;
  alert('yes it is barcelona the best team in the world');}
else if(team === 'no' || team === 'n') {
  alert('it is ok the currect answer is barcelona the best team in the world');
}

let degree = prompt('is IT my firs majur').toLowerCase();
//console.log(degree);
if(degree === 'yes' || degree === 'y') {
  alert('it all right you can read more about my here in this page');}
else if(degree === 'no' || degree === 'n') {mark++;
  alert('civil engineering you are right');
}


let learn = prompt('do i study software development now').toLowerCase();
//console.log(learn);
if(learn === 'yes' || learn === 'y') {mark++;
  alert('software development yeah you are correct');}
else if(learn === 'no' || learn === 'n') {
  alert('I study now software development and it look like a great thing');
}



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

alert (movieArray);


alert(mark);












