const lists = [
  {
    name: "Shopping",
    todos: [
      {text: "Bananas",
      completed: false},
      {text: "Butter",
      completed: false},
      {text: "Milk",
      completed: false},
      {text: "Potatoes",
      completed: false},
      {text: "Beef",
      completed: false},
    ]
  },
]

const currentList = lists[0];

function addToDo() {
  const text = document.getElementById('add-item').value;
  if(text) {
    currentList.todos.push({
      text: text,
      completed: false
    })
    render();
  }
  document.getElementById('add-item').value = '';
}

function addList() {
  const text = document.getElementById('add-list').value;
  if(text) {
    lists.push({
      name: text,
      todos: []
    })
  render();
  }
  document.getElementById('add-list').value = '';
}

function render() {
  let listsHtml = '<ul class="list-group">';
  lists.forEach((list) => {
    listsHtml += `<li class="list-group-item">${list.name}</li>`;
  });
  listsHtml += '</ul>';
  document.getElementById('lists').innerHTML = listsHtml;
  document.getElementById('current-list-name').innerText = currentList.name;
  let todosHtml = '<ul class="list-group-flush">';
  currentList.todos.forEach((todo) => {
    todosHtml += `<li class="list-group-item">${todo.text}</li>`;
  });
  document.getElementById('current-list-todos').innerHTML = todosHtml;
}

function save() {
  localStorage.setItem('currentList', JSON.stringify(currentList)); 
  localStorage.setItem('lists', JSON.stringify(lists));
 }
