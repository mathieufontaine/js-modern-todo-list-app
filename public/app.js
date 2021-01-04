// selectors
const todoForm = document.querySelector("form");
const todoFilter = document.querySelector(".todo-filter");
const todoList = document.querySelector(".todo-list");
const itemsLeft = document.querySelector(".items-left");
const clearBtn = document.querySelector(".clear");

// items counter
let numberItems = 0;

// event listeners
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", checkDeleteTodo);
todoFilter.addEventListener("click", filterTodo);
clearBtn.addEventListener("click", clearComplete);

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
  let input = e.target.children[1];
  const todoText = document.createElement("p");
  todoText.innerText = input.value;
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
  input.value = "";
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

function filterTodo(e) {
  const filterBtns = [...todoFilter.children];
  filterBtns.forEach(btn => btn.classList.remove("selected"));
  const item = e.target;
  item.classList.add("selected");
  const todos = [...todoList.childNodes];
  todos.forEach(todo => {
    if (item.classList.contains("all")) {
      todo.style.display = "flex";
    } else if (item.classList.contains("active")) {
      todo.classList.contains("active")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none");
    } else {
      todo.classList.contains("completed")
        ? (todo.style.display = "flex")
        : (todo.style.display = "none");
    }
  });
}

function clearComplete(e) {
  const todos = [...todoList.childNodes];
  console.log(todos);
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].classList.contains("completed")) {
      todos[i].remove();
    }
  }
}
