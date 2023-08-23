const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addButton = document.getElementById('add');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;

    if (name && email) {
        const newItem = { name, email };
        addItemToLocalStorage(newItem);
        renderList();
        nameInput.value = '';
        emailInput.value = '';
    }
});

function addItemToLocalStorage(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

function renderList() {
    list.innerHTML = '';
    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>${item.email}</span>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function deleteItem(index) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    renderList();
}

function init() {
    renderList();
}

init();
