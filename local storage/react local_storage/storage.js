// add data from db
const addToDb = (id) => {
    let shoppingCart = {};

    // get cart =====================
    const storedCart = localStorage.getItem('shopping_cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }

    // add the quantity =============
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
        // console.log("already exicts");

    } else {
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));


}


// remove data from db 
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping_cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));

        }
    }
}

// delete full shopping cart
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping_cart');
}

// ===============================
export { addToDb, removeFromDb, deleteShoppingCart };