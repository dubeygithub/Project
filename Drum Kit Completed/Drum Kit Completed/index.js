let NumberOfDrums = document.querySelectorAll('.drum').length
for(let i = 0;i<NumberOfDrums;i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    let buttonInnerHTML = this.innerHTML;
    let audio 
    switch(buttonInnerHTML){
        case 'w':
             let tom1 = new Audio('sounds/tom-1.mp3')
             tom1.play()
            break;
            case 'a':
                 let tom2 = new Audio('sounds/tom-2.mp3')
                 tom2.play()
                break;
                case 's':
                     let tom3 = new Audio('sounds/tom-3.mp3')
                     tom3.play()
                    break;
                    case 'd':
                         let tom4 = new Audio('sounds/tom-4.mp3')
                         tom4.play()
                        break;
                        case 'j':
                             let snare = new Audio('sounds/snare.mp3')
                             snare.play()
                            break;
                            case 'k':
                                 let crash = new Audio('sounds/crash.mp3')
                                 crash.play()
                                break;
                                case 'l':
                                     let kick = new Audio('sounds/kick-bass.mp3')
                                     kick.play()
                                    break;

                                    default:console.log(buttonInnerHTML)
    }

  })
}

document.addEventListener('keydown',function(e){
    
    if(e.key == 'w'){
        let tom1 = new Audio('sounds/tom-1.mp3')
             tom1.play()
    }else if(e.key == 'a'){
        let tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play()
    }
    else if(e.key == 's'){
        let tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play()
    }else if(e.key == 'd'){
        let tom4 = new Audio('sounds/tom-4.mp3')
        tom4.play()
    }else if(e.key == 'j'){
        let snare = new Audio('sounds/snare.mp3')
        snare.play()
    }else if(e.key == 'k'){
        let crash = new Audio('sounds/crash.mp3')
                                 crash.play()
    }else if(e.key == 'l'){
        let kick = new Audio('sounds/kick-bass.mp3')
                                     kick.play()
    }
})
