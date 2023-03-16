const localStorageContent = localStorage.getItem("listOfLists");
let lists;
let listName;
let todos;
if(localStorageContent === null) {
    lists = [];
} else {
    lists = [localStorage.getItem("listOfLists")];
}

document.getElementById("lists").innerHTML = localStorage.getItem("history");

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

// function addToDo() {
//   const text = document.getElementById('add-item').value;
//   if(text) {
//     currentList.todos.push({
//       text: text,
//       completed: false
//     })
//     render();
//   }
//   document.getElementById('add-item').value = '';
// }

function render() {
  let listsHtml = '<ul class="list-group">';
  listsHtml += '</ul>';
  let text = document.getElementById("add-list").value;
  lists.forEach((list) => {
    listsHtml += `<li class="list-group-item">${list.listName}</li>`;
  });
  localStorage.setItem("history", listsHtml);
  let history = listsHtml;
  document.getElementById("lists").innerHTML = history;
  // let todosHtml = '<ul class="list-group-flush">';
  // lists.todos.forEach((todo) => {
  //   todosHtml += `<li class="list-group-item">${todo.text}</li>`;
  // });
}