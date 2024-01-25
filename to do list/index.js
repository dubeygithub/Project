let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')


function action(){
  if(inputBox.value === ''){
    alert('Please Enter something')
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = 'x'
    li.appendChild(span)
  }
  inputBox.value = ''
  savedata()
}

listContainer.addEventListener('click',function(e){
 if(e.target.tagName === 'LI'){
  e.target.classList.toggle("checked")
  savedata()
 } else if( e.target.tagName === 'SPAN') {
  e.target.parentElement.remove();
  savedata()
 }
})

function savedata() {
  localStorage.setItem('data',listContainer.innerHTML)
}
function showdata(){
  listContainer.innerHTML = localStorage.getItem('data')
}
showdata()
