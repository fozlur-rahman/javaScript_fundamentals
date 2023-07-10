const addToStorage = () => {
    const idInput = document.getElementById('id-input');
    const id = idInput.value;
    const valueInput = document.getElementById('value-input');
    const value = valueInput.value;


    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}
