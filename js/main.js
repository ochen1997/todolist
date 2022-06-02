const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',trashcheck);

document.querySelector("#activeFilter").onclick = applyFilter;
document.querySelector("#allFilter").onclick = applyFilter;

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    const checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.type = "checkbox"
    todoDiv.appendChild(checkBox)

    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'x';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv)

    todoInput.value = '';
    todoList.addEventListener("change", function(event){
        if(event.target.tagName === "INPUT" && event.target.type === "checkbox"){
            toggleComplete(event.target);
        }
    })


}

function trashcheck (event) {
    const item = event.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

}

function toggleComplete(inputElement){
    if(inputElement.checked === false){
        inputElement.parentElement.classList.remove("complete");
    } else {
        inputElement.parentElement.classList.add("completed")
    }
}
