const lists = {
    1: {
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
    2: {
    name: "School",
    todos: [
    {text: "Art",
    completed: false},
    {text: "Social Science",
    completed: false},
    {text: "Math",
    completed: false},
    ] 
}   
}
function render() {
    // this will hold the html that will be displayed in the sidebar
    let listsHtml = '<ul class="list-group">';
    // iterate through the lists to get their names
    lists.forEach((list) => {
      listsHtml += `<li class="list-group-item">${list.name}</li>`;
    });
   
    listsHtml += '</ul>';
    // print out the lists
   
    document.getElementById('lists').innerHTML = listsHtml;
    // print out the name of the current list
   
    document.getElementById('current-list-name').innerText = currentList.name;
    // iterate over the todos in the current list
   
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((list) => {
      todosHtml += `<li class="list-group-item">${todo.text}</li>`;
    });
    // print out the todos
    document.getElementById('current-list-todos').innerHTML = todosHtml;
   }
function addTodo() {
    // get the todo text from the todo input box
    const text = document.getElementById('todo-input-box').value;
    if(text) {
    currentList.todos.push({
    text: text,
    completed: false
    })
    render();
    }
}