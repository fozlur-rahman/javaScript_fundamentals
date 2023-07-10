const laodSingle = async (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    detailsDisplay(data.data)
}

const detailsDisplay = (phone) => {
    console.log(phone);
    const detailsContainer = document.getElementById('modal-details');
    const div = document.createElement('div');
    div.classList.add('modal-body');
    div.innerHTML = `
                        <img src="${phone.image}" class="card-img-top p-5" alt="...">
                        <div class="card-body">
                        <img src="" alt="">
                        <p class="mb-2">Brand: ${phone.brand}</p>
                        <h5 class="card-title">Model: ${phone.name}</h5>
                        <p>${phone.mainFeatures.storage}</p>
                        <p>${phone.mainFeatures.displaySize}</p>
                        <p>${phone.mainFeatures.chipSet}</p>
                        <p>${phone.mainFeatures.memory}</p>
    `
    detailsContainer.appendChild(div);
}

const phoneDetails = (slug) => {
    laodSingle(slug);

}