const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit);

}



const displayPhone = (phones, dataLimit) => {

    const phonesContainer = document.getElementById('phones-container');
    const showAllbtn = document.getElementById('show-all-btn');
    phonesContainer.innerHTML = " ";
    if (dataLimit && phones.length > 10) {
        showAllbtn.classList.remove('d-none');
        phones = phones.slice(0, 10);
    } else {
        showAllbtn.classList.add('d-none');
    }
    const notFound = document.getElementById('not-found');
    (phones.length === 0) ? notFound.classList.remove('d-none') : notFound.classList.add('d-none');

    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
      
                <div class="card">
                    <img src="${phone.image}" class="card-img-top p-5" alt="...">
                    <div class="card-body">
                        <img src="" alt="">
                        <p>Brand: ${phone.brand}</p>
                        <h5 class="card-title">Model: ${phone.phone_name}</h5>
                        <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Details
                        </button>
                       
                    </div>
                </div>
        `
        phonesContainer.appendChild(phoneDiv);
    });
    toggleSpiner(false);

}
// seach phone s 
const proccessSearch = (dataLimit) => {
    const searchText = document.getElementById('seach-field').value;
    document.getElementById('spinner').classList.remove('d-none');

    loadPhone(searchText, dataLimit);
    toggleSpiner(true);
}



// seacrh for 10 phones 
const searchPhones = () => {
    proccessSearch(10);

}
// search for all phones 
const showAll = () => {
    proccessSearch();

}
document.getElementById('seach-field').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        proccessSearch(10);
    }
})


// toggleSpiner 
const toggleSpiner = (isLoading) => {
    const spiner = document.getElementById('spinner');
    if (isLoading) {
        spiner.classList.remove('d-none');
    } else {
        spiner.classList.add('d-none');
    }
}

loadPhone('apple');