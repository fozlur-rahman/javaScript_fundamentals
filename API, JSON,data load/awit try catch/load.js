const loadData = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUsers(data);
    } catch (error) {
        console.log(error);
    }
}

const displayUsers = (data) => {
    console.log(data);
}