
let Containerbottom = document.querySelector('.c-bottom')
let Time = 3
let score = 0
let HitNumebr = 0

function GameLogic(){
  Containerbottom.addEventListener('click',function(e){
    let NayaNumber = Number(e.target.textContent)
    if(NayaNumber === HitNumebr){
      ScoreFun()
      makebubbles()
      Hit()
    }
  })
}
function makebubbles(){
  let clutter = ''
for(let i = 1;i<=176;i++){
  let num = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${num}</div>`
}

document.querySelector(".c-bottom").innerHTML = clutter
}

function Timer(){
  let StartTimer = setInterval(function(){
    if(Time>=0){
      document.querySelector('#TimeFunction').textContent = Time
      Time--;
    }else{
      clearInterval(StartTimer)
      Containerbottom.innerHTML = `<h1>Game Over</h1>`
    }
    },1000) 
}

function Hit(){
 HitNumebr = Math.floor(Math.random()*10)
 document.querySelector('#HitFunction').textContent = HitNumebr
}

function ScoreFun(){
  document.querySelector('#ScoreFunction').textContent = score
  score += 10;
}

Timer()
makebubbles()
Hit()
ScoreFun()
GameLogic()