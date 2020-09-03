const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(todos));
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;
    delBtn.innerHTML="&#10007;"
    delBtn.addEventListener("click",deleteTodo);
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);

    const todoObj ={
        id:newId,
        text:text
    }

    todos.push(todoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;    
    paintTodo(currentValue);
    todoInput.value='';
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);

    if(todos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(todo => {
            paintTodo(todo.text);
        });
    }
}



function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodo = todos.filter(todo=>{
        return todos.id !== parseInt(li.id)
    });

    todos = cleanTodo;

    saveTodos();
    
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit",handleSubmit);
    
}

init();