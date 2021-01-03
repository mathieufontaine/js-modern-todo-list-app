// selectors

const todoForm = document.querySelector("form");
const todoFilter = document.querySelector(".todo-filter");
const todoList = document.querySelector(".todo-list");

// event listeners
todoForm.addEventListener("submit", addTodo);

// functions
function addTodo(e) {
  e.preventDefault();
  // create todo
  const todo = document.createElement("li");
  todo.classList.add("todo");
  // add checkbox
  const checkbox = document.createElement("div");
  checkbox.classList.add("round");
  todo.append(checkbox);
  // add value
  let input = e.target.children[1].value;
  const todoText = document.createElement("p");
  todoText.innerText = input;
  todo.append(todoText);
  // add to list
  todoList.append(todo);
}
