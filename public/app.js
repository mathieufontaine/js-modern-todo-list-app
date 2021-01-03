// selectors

const todoForm = document.querySelector("form");
const todoFilter = document.querySelector(".todo-filter");
const todoList = document.querySelector(".todo-list");
const itemsLeft = document.querySelector(".items-left");
let numberItems = 0;

// event listeners
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", checkDeleteTodo);

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
  // add cross
  const cross = document.createElement("img");
  cross.src = "img/icon-cross.svg";
  cross.classList.add("cross");
  todo.append(cross);
  // add to list
  todoList.append(todo);
  numberItems += 1;
  updateItemsLeft();
}

function checkDeleteTodo(e) {
  const item = e.target;
  const todo = item.parentElement;
  console.log(item);
  if (item.classList.contains("cross")) {
    todo.remove();
    numberItems -= 1;
  } else if (todo.classList.contains("todo")) {
    todo.classList.contains("completed")
      ? (numberItems += 1)
      : (numberItems -= 1);
    todo.classList.toggle("completed");
  }
  updateItemsLeft();
}

function updateItemsLeft() {
  numberItems < 0 ? (numberItems = 0) : numberItems;
  itemsLeft.innerText = `${numberItems} items left`;
}
