const todolist = [
    'Belajar Javasricpt Dasar',
    'Belajar Javascript OOP',
    'Belajar Javascript Library',
    'Belajar Javascript DOM'
]

function clearTodoList(){
    const todoListBody = document.getElementById("todoListBody")
    while(todoListBody.firstChild){
        todoListBody.removeChild(todoListBody.firstChild)
    }
}

function removeTodoList(index){
    todolist.splice(index, 1)
    displayTodolist()
}

function addTodoList(index, todo){
        const tr = document.createElement("tr")
        const tdButton = document.createElement("td")
        tr.appendChild(tdButton)

        const buttonDone = document.createElement("input")
        buttonDone.type = "button"
        buttonDone.value = "Done"
        buttonDone.onclick = function (){
            removeTodoList(index)
        }
        tdButton.appendChild(buttonDone)

        const tdTodo = document.createElement("td")
        tdTodo.textContent = todo
        tr.appendChild(tdTodo)

        const todoListBody = document.getElementById("todoListBody")
        todoListBody.appendChild(tr)
}

function displayTodolist(){
    clearTodoList()

    for(let i = 0; i < todolist.length; i++){
        const todo = todolist[i]

        const searchText = document.getElementById("search").value.toLowerCase()

        if(todo.toLowerCase().includes(searchText)){
            addTodoList(i, todo);
        }
    }
}

document.forms["todoForm"].onsubmit = function (event){
    event.preventDefault()

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();

    console.info(todolist);
    displayTodolist()
}

const searchInput = document.getElementById("search")
searchInput.onkeyup = function (){
    displayTodolist()
}
searchInput.onkeydown = function (){
    displayTodolist()
}

displayTodolist()