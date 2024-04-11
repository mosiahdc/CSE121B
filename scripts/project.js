/* Final Project */

/* Declare and initialize global variables */

const recipesElement = document.querySelector('#recipes');
const filterMealsElement = document.querySelector('#filterMeals');
const filterCategoryElement = document.querySelector('#filterCategory');

let recipeList = new Array;
let recipeMeals = new Array;
let recipeCategory = new Array;

let mealsfilter = "Meals";

const title = document.querySelector('h2');

/* async displayRecipes Function */

const displayRecipes = (recipes) => {

    recipes.forEach ((element) => {

        const article = document.createElement('article');

        const recipeName = document.createElement('h3');
        recipeName.innerText = element.recipeName;
        article.appendChild(recipeName);

        const imageUrl = document.createElement('img');
        imageUrl.setAttribute('src', element.imageUrl);
        article.appendChild(imageUrl);

        const detailsContent = document.createElement('div');
        detailsContent.style.textAlign = 'left';
        detailsContent.innerHTML = `
        <p><b>Serving Time:</b> ${element.servingTime}</p>
        <p><b>Recipe Link:</b> <a href="${element.recipeLink}">${element.recipeSource}</a></p>
        `;
        article.appendChild(detailsContent);



        recipesElement.appendChild(article);

    });

}

const getRecipeFilters = (recipes) => {

    recipes.forEach ((element) => {

        if (!recipeMeals.includes(element.meals)) {
            recipeMeals.push(element.meals);
        }

        if (!recipeCategory.includes(element.category)) {
            recipeCategory.push(element.category);
        } 

    });
}

const setMealsFilter = (meals) => {

    meals.forEach((element) => {

        const filter = document.createElement('option');
        filter.setAttribute('value', element);
        filter.innerText=element;

        filterMealsElement.appendChild(filter);

    })
}

const setCategoryFilter = (category) => {

    category.forEach((element) => {

        const filter = document.createElement('option');
        filter.setAttribute('value', element);
        filter.innerText=element;

        filterCategoryElement.appendChild(filter);

    })
}

/* async getRecipes Function using fetch()*/

const getRecipes = async () => {
    const response = await fetch('scripts/recipes.json');

    if (response.ok) {
        recipeList = await response.json();
        getRecipeFilters(recipeList)
        setMealsFilter(recipeMeals)
        setCategoryFilter(recipeCategory)
        filterMeals(recipeList);
    }
}

/* reset Function */

function reset() {
    while (recipesElement.firstChild) {
        recipesElement.removeChild(recipesElement.lastChild);
    }
}

/* filterRecipes Function */

function filterMeals(recipes) {
    reset();
    let filter = document.querySelector("#filterMeals").value;
    
    displayRecipes(recipes.filter(recipe => recipe.meals.includes(filter)));
    title.textContent = `${filter}`
}

function filterCategory(recipes) {
    reset();
    let filter = document.querySelector('#filterCategory').value;
    displayRecipes(recipes.filter(recipe => recipe.category.includes(filter)));
    title.textContent = `${mealsfilter} > ${categories}`
    displayRecipes(categories);
}

getRecipes();

/* Event Listener */

document.querySelector("#filterMeals").addEventListener("change", () => {filterMeals(recipeList)});
document.querySelector("#filterCategory").addEventListener("change", () => {filterCategory(recipeList)});