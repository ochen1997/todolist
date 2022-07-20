const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',trashcheck);

document.querySelector("#activeFilter").onclick = applyFilter;
document.querySelector("#allFilter").onclick = applyFilter;

function addTodo(event) {
    event.preventDefault()

    const text = todoInput.value;
    if(text === ""){
        return
    }
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    const checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.type = "checkbox"
    todoDiv.appendChild(checkBox)

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const paragraph = document.createElement("p")
    paragraph.classList.add("paragraph")
    paragraph.textContent = text;
    todoDiv.appendChild(paragraph)

    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'x';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv)

    todoInput.value = '';


}

function trashcheck (event) {
    const item = event.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

}




