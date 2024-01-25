// let input = document.getElementById('inputText');
// let buttons = document.querySelectorAll('button');

// // for storing answers
// let string = "";

// // store all the buttons in an array.
// let arr = Array.from(buttons);
// arr.forEach(button => {
//   button.addEventListener('click',(e) => {
//     // jb bhi = click hua string me ans aa jyega
//     if(e.target.innerHTML == '='){ 
//       string = eval(string);
//       input.value = string;
//     }
//     else if(   e.target.innerHTML == 'AC'){
//      string = "";
//      input.value = string;
//     }
//     else if( e.target.innerHTML == 'DL'){
//     string = string.substring(0,string.length-1);
//     input.value = string;
//     }
//     else{
//       // ya to phir saare number joodte rhege
//       // like 7 8 9 = 789
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   } )
// })

let userInput = document.querySelector('#inputText')
let buttons = document.querySelectorAll('button')

let string = ''

let arr = Array.from(buttons)
arr.forEach(button => {
    button.addEventListener('click',function(e){
    if(e.target.innerHTML == '='){
      userInput.value = eval(string)
    }
    else if(e.target.innerHTML == 'AC'){
      string = ''
      userInput.value = string;
    } else if(e.target.innerHTML == 'DL'){
      string = string.substring(0,string.length - 1)
      userInput.value = string
    }
    else {
      string += e.target.innerHTML
      userInput.value = string
    }
    })
}) 