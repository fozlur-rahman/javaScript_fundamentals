const loadMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}


const displayMeal = (meals) => {
    // console.log(meals);
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText = " ";
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="..."> 
                    <div class="card-body">
                        <h5 class="card-title">Name : ${meal.strMeal}</h5>

                        <button onclick="detailsMeal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        See More
                        </button>
                    </div>
                </div>
        `
        mealContainer.appendChild(div);
    });
}

const seachMeal = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeal(searchText);
}


loadMeal('fish');