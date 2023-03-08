//EVENTS/LISTENERS
const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const todoNb = document.querySelector(".nbTodo b");

button.addEventListener("click", addItem);

function addItem() {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}`;
  todoList.appendChild(newItem);
  todoNb.innerText = items.length;
}
