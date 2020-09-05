const TODO_LS = 'todos';

const todoForm = document.querySelector('.js-todo');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');

let todos = [];

function init(){
    //loadTodo();
    todoForm.addEventListener('submit',addTodo);
}

function addTodo(e){
    e.preventDefault();

    const newTodo = todoInput.value;
    const newId = todos.length+1;
    const todoObj = {id:newId, todo:newTodo}

    paintTodo(todoObj);
    todos.push(todoObj);
    localStorage.setItem(TODO_LS,todos);

    todoInput.value='';
}
function paintTodo(todoObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delButton = document.createElement('button');
    delButton.innerText = 'x';
    span.innerText = todoObj.todo;

    li.id = todoObj.id;
    li.appendChild(span);
    li.appendChild(delButton);
    todoList.appendChild(li);

    


}

function loadTodo(){
    const savedList = localStorage.getItem(TODO_LS);


}

init();