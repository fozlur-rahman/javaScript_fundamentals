const detailsMeal = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (meal) => {
    document.getElementById('exampleModalLabel').innerText = meal.strMeal;
    const modalBody = document.getElementById('modal-body');
    const div = document.createElement('div');
    div.innerHTML = `
    <img class= "w-100 mb-5" src="${meal.strMealThumb}" alt="">
   <p>${meal.strInstructions.substring(0, 500)}</p>
    `
    modalBody.appendChild(div);
}

