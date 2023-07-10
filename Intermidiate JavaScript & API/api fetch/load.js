function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(users) {
    for (const user of users) {
        const ul = document.getElementById('user-list');
        const li = document.createElement('li');
        li.innerHTML = `
        <p> user name : ${user.name}</p>
                      `;
        ul.appendChild(li);
    }
}