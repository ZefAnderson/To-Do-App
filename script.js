const localStorageContent = localStorage.getItem("serialized");
let lists;
if(localStorageContent === null) {
    lists = [];
} else {
    lists = JSON.parse(localStorage.getItem("serialized"));
}

const listItemStorage = localStorage.getItem("serializedTodos");
let todos;
if(listItemStorage === null) {
  todos = [];
} else {
  todos = JSON.parse(localStorage.getItem("serializedTodos"));
}

document.getElementById("lists").innerHTML = localStorage.getItem("history");
document.getElementById("todos").innerHTML = localStorage.getItem("todoHistory");

function addList() {
  let text = document.getElementById("add-list").value;
  if(text){
      lists.push({
        listName: text,
        todos: []
      });
      let serialized = JSON.stringify(lists);
      localStorage.setItem("serialized", serialized);
      render();
  }
  document.getElementById("add-list").value = '';
}

function addToDo() {
  let temp = document.getElementById('add-item').value;
  if(temp) {
    todos.push({
      task: temp,
      completed: false
    });
    let serializedTodos = JSON.stringify(todos);
    localStorage.setItem("serializedTodos", serializedTodos);
    let todosHtml = '<ul class="list-group-flush">';
    todosHtml += '</ul>';
    todos.forEach((todo) => {
      todosHtml += `<li class="list-group-item">${todo.task}</li>`;
    });
    localStorage.setItem("todoHistory", todosHtml);
    document.getElementById("todos").innerHTML = localStorage.getItem("todoHistory")
    }
  document.getElementById('add-item').value = '';
}

function render() {
  let listsHtml = '<ul class="list-group">';
  listsHtml += '</ul>';
  lists.forEach((list) => {
    listsHtml += `<li class="list-group-item">${list.listName}</li>`;
  });
  localStorage.setItem("history", listsHtml);
  document.getElementById("lists").innerHTML = localStorage.getItem("history");
}

function deleteList() {
  
}