let click;
let result;
let win=0;
let lost=0;
let draw=0;
let paper='🤚';
let rock='✊';
let sci='✌️';
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function winners(click,result){
  if(click==1){
    if(result==1){
      document.getElementById('second').innerHTML="Draw!";
      draw++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${rock} VS ${rock}`;
    }
    else if(result==2){
      document.getElementById('second').innerHTML="You Lost.";
      lost++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${rock} VS ${paper}`;
    }
    else{
      document.getElementById('second').innerHTML="You Won.";
      win++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${rock} VS ${sci}`;
    }
  }
  else if(click==2){
    if(result==1){
      document.getElementById('second').innerHTML="You Won.";
      win++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${paper} VS ${rock}`;
    }
    else if(result==2){
      document.getElementById('second').innerHTML="Draw!";
      draw++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${paper} VS ${paper}`;
    }
    else{
      document.getElementById('second').innerHTML="You Lost.";
      lost++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${paper} VS ${sci}`;
    }
  }
  else{
    if(result==1){
      document.getElementById('second').innerHTML="You Lost.";
      lost++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${sci} VS ${rock}`;
    }
    else if(result==2){
      document.getElementById('second').innerHTML="You Won.";
      win++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${sci} VS ${paper}`;
    }
    else{
      document.getElementById('second').innerHTML="Draw!";
      draw++;
      document.getElementById('tally').innerHTML=`Win:${win} Lost:${lost} Draw:${draw}`;
      document.getElementById('choose').innerHTML=`${sci} VS ${sci}`;
    }
  }
  return 0;
}