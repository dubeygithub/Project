let random1 = parseInt(1 + Math.random()*6)
let random2 = parseInt(1 + Math.random()*6)
let player1dice = document.querySelector('.Player1')
let player2dice = document.querySelector('.Player2')
let DeclareMessage = document.querySelector('.Declare')

function Message(){
  if(random1 > random2){
    DeclareMessage.textContent = 'Player 1 Wins!'
  }else if(random1 < random2){
    DeclareMessage.textContent = 'Player 2 Wins!'
  }else{
    DeclareMessage.textContent = 'Draw'
  }

}
function P1Dice(){
 if(random1 === 6){
  player1dice.src='dice6.png'
 }else if(random1 === 5){
  player1dice.src='dice5.png'
 }else if(random1 === 4){
  player1dice.src='dice4.png'
 }else if(random1 === 3){
  player1dice.src='dice3.png'
 }else if(random1 === 2){
  player1dice.src='dice2.png'
 }else{
  player1dice.src='dice1.png'
 }
}
function P2Dice(){
  if(random2 === 6){
   player2dice.src='dice6.png'
  }else if(random2 === 5){
   player2dice.src='dice5.png'
  }else if(random2 === 4){
   player2dice.src='dice4.png'
  }else if(random2 === 3){
   player2dice.src='dice3.png'
  }else if(random2 === 2){
   player2dice.src='dice2.png'
  }else{
   player2dice.src='dice1.png'
  }
 }

P1Dice()
P2Dice()
Message()
