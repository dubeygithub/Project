let searchBtn = document.querySelector('.searchBtn')
let searchBox =  document.querySelector('.searchBox')
let recipeContainer = document.querySelector('.recipe-container')
let recipedetails =  document.querySelector('.recipe-details-content')
let closeButton = document.querySelector('.recipe-close-btn')

async function fetchRecipes(userInput){
  recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>"
  try{
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
  const response = await data.json() 
    // console.log(response)
    recipeContainer.innerHTML = ""
    response.meals.forEach(meal => {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe')
      recipeDiv.innerHTML = `<img src = "${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea}</p>
    <p>${meal.strCategory}</p>
    `
    const button = document.createElement('button')
    button.textContent = 'View Recipe'
    recipeDiv.appendChild(button)
    recipeContainer.appendChild(recipeDiv)
    
    // Add Event Listener 
    button.addEventListener('click',function(){
      openRecipePopUP(meal)
    })
  })
  } catch(error) {
    recipeContainer.innerHTML = "<img src='https://t4.ftcdn.net/jpg/05/24/04/51/360_F_524045110_UXnCx4GEDapddDi5tdlY96s4g0MxHRvt.jpg'</img>"
  }
} 
function fetchIngredients(meal){
  let IngredientsList = ""
  for(let i=1;i<=20;i++){
    const Ingredients = meal[`strIngredient${i}`];
    if(Ingredients){
      const measure = meal[`strMeasure${i}`]
      IngredientsList += `<li>${measure} - ${Ingredients} </li>`
    } else {
      break;
    }
  }
  return IngredientsList;
}

function openRecipePopUP(meal){
recipedetails.innerHTML = `<h2 class="recipeName">${meal.strMeal}</h2>
<h3 >Ingredients:</h3>
<ul>${fetchIngredients(meal)}</ul>
<div>
<h3> Instructions:</h3>
<p class="Recipeinstructions">${meal.strInstructions}</p>
`

recipedetails.parentElement.style.display = 'block'
}
closeButton.addEventListener('click',function(){
  recipedetails.parentElement.style.display = 'none'
})

searchBtn.addEventListener('click',function(e){
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  if(!searchInput){
    recipeContainer.innerHTML = `<h2>Please Enter the Meal you want to Search!</h2>`
    return;
  }
  fetchRecipes(searchInput)
})
