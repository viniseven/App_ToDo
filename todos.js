var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_tarefas')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for ( todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

     var busca = todos.indexOf(todoText, 0)
     if (busca == -1){
         todos.push(todoText);
     }else{
         alert('Tarefa já inserida');
     }
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_tarefas', JSON.stringify(todos));
}

