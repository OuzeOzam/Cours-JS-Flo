//SELECTORS
document.title = "Dom";

// // Get Element by Tag Name
// header2 = document.getElementsByTagName("h2");
// console.log(header2[0]);

// const button = document.getElementById("submit");
// console.log(button);
const todolist = document.querySelector("#todo-list");
const items = todolist.children;
const todoNb = document.querySelector(".nbTodo");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 6";

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 7";

todolist.appendChild(newItem);
todolist.appendChild(anotherItem);

todoNb.innerText = items.length;

console.log(newItem);

