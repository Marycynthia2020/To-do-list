let container = document.querySelector(".container");
let inputField = document.getElementById("new-task");
let addButton = document.getElementById("add-button");
let todoList = document.getElementById("incomplete-tasks");
// let clearItem = document.getElementsByClassName('clear')
inputField.focus()

addButton.addEventListener("click", addItem);

// why is my own not working
// inputField.addEventListener('keypress', (event) => {
//     if() {
//         // addItem()
//         addButton.click()
//         console.log('may')
//     }
// })
// // onkeydown="isKeyPressed(event)"
// const isKeyPressed = (event) => {
//     if(event.shiftKey) {
//         addButton.click()
//     }

// }

function addItem() {
    let value = inputField.value;
    let listElement = document.createElement('li');
    if(inputField.value !== '') {
        listElement.innerHTML = ` <p>${value}</p>
        <button id="edit-button">Edit</button>
        <button id="delete-button">Delete</button>`;


        todoList.prepend(listElement)  
        inputField.value = '';
        
    }
    
    let deleteButton = listElement.querySelector('#delete-button');
    deleteButton.addEventListener('click', deleteItem);

    let editButton = listElement.querySelector('#edit-button');
    editButton.addEventListener('click', editItem);

}


function deleteItem(event) {
    todoList.removeChild(event.currentTarget.parentElement);
    
}


function editItem(event) {
    addButton.textContent = 'Edit'

    if(addButton.textContent === 'Edit') {
        let currentList = event.currentTarget.previousElementSibling;
        inputField.value = currentList.textContent;
        addButton.removeEventListener('click', addItem)

        addButton.addEventListener('click', function edit() {
            currentList.textContent = inputField.value;
            inputField.value = ''
            addButton.textContent = 'Add'
            addButton.addEventListener('click', addItem)
            addButton.removeEventListener('click', edit)
        })
    }
}



