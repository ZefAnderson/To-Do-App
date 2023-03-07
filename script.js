const button = document.getElementById("addListBtn");
button.addEventListener("click", addList);
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
    {
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
]
const currentList = lists[0];
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
function addList() {
    const text = document.getElementById('new-list-input').value;
    if(text) {
    currentList.todos.push({
    text: text,
    completed: false
    })
    render();
    }
}