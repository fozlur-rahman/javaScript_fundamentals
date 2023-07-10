const addproducts = () => {
    const productName = document.getElementById("product-name");
    const productQuantity = document.getElementById("product-quantity");
    const productNameText = productName.value;
    const productQuantityText = productQuantity.value;
    productName.value = "";
    productQuantity.value = "";

    saveLocalStorage(productNameText, productQuantityText);
    displayProduct(productNameText, productQuantityText);
};

const displayProduct = (productNameText, productQuantityText) => {
    const ul = document.getElementById("list-items");
    const li = document.createElement('li');
    li.innerText = `${productNameText}: ${productQuantityText}`;
    ul.appendChild(li);
};

const getLocalStorage = () => {
    let cart = {};
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
};

const saveLocalStorage = (product, quantity) => {
    const cart = getLocalStorage();
    cart[product] = quantity;
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifiedCart);
};

const displayProductFromLocal = () => {
    const savedCartLocal = getLocalStorage();
    for (const product in savedCartLocal) {
        const quantity = savedCartLocal[product];
        displayProduct(product, quantity);
    }
};

displayProductFromLocal();