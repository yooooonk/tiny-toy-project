const TODO_LS = 'todos';

const todoForm = document.querySelector('.js-todo');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todo-list');

let todos = [];
let maxIdNo=0;

function init(){
    loadTodo();
    todoForm.addEventListener('submit',addTodo);
}

function addTodo(e){
    e.preventDefault();

    const newTodo = todoInput.value;
    const newId = ++maxIdNo;
    const todoObj = {id:newId, todo:newTodo}

    paintTodo(todoObj);
    todos.push(todoObj);
    saveLs();
    todoInput.value='';
}
function paintTodo(todoObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delButton = document.createElement('button');
    delButton.innerText = 'x';
    delButton.addEventListener("click",deleteTodo)
    span.innerText = todoObj.todo;

    li.id = todoObj.id;
    li.appendChild(span);
    li.appendChild(delButton);
    todoList.appendChild(li);


}

function deleteTodo(e){
    const li = e.target.parentNode;
    todoList.removeChild(li);
    
    const cleanTodo = todos.filter((todos)=>{
        return todos.id !== parseInt(li.id);
    });

    todos = cleanTodo;
    saveLs();
}

function saveLs(){
    localStorage.setItem(TODO_LS,JSON.stringify(todos));
}

function loadTodo(){
    const savedList = JSON.parse(localStorage.getItem(TODO_LS));
    if(savedList){
        savedList.forEach(todo => {
            todos.push(todo);
            console.log(todo.id)
            maxIdNo = maxIdNo>todo.id ? maxIdNo:todo.id;
            paintTodo(todo)
        });
    }
    
}

init();