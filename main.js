let click;
let result;
let score=JSON.parse(localStorage.getItem('score'));
if(score===null){
  score={
    win:0,
    lost:0,
    draw:0
  };
}
let paper='🤚';
let rock='✊';
let sci='✌️';
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
function winners(click,result){
  if(click==1){
    if(result==1){
      document.getElementById('second').innerHTML="Draw!";
      score.draw++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${rock} VS ${rock}`;
    }
    else if(result==2){
      document.getElementById('second').innerHTML="You Lost.";
      score.lost++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${rock} VS ${paper}`;
    }
    else{
      document.getElementById('second').innerHTML="You Won.";
      score.win++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${rock} VS ${sci}`;
    }
  }
  else if(click==2){
    if(result==1){
      document.getElementById('second').innerHTML="You Won.";
      score.win++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${paper} VS ${rock}`;
    }
    else if(result==2){
      document.getElementById('second').innerHTML="Draw!";
      score.draw++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${paper} VS ${paper}`;
    }
    else{
      document.getElementById('second').innerHTML="You Lost.";
      score.lost++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${paper} VS ${sci}`;
    }
  }
  else{
    if(result==1){
      document.getElementById('second').innerHTML="You Lost.";
      score.lost++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${sci} VS ${rock}`;
    }
    else if(result==2){
      document.getElementById('second').innerHTML="You Won.";
      score.win++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${sci} VS ${paper}`;
    }
    else{
      document.getElementById('second').innerHTML="Draw!";
      score.draw++;
      document.getElementById('tally').innerHTML=`Win:${score.win} Lost:${score.lost} Draw:${score.draw}`;
      document.getElementById('choose').innerHTML=`${sci} VS ${sci}`;
    }
  }
  localStorage.setItem('score',JSON.stringify(score));
  return 0;
}
