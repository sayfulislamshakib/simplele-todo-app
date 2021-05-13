let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

//funtions
let createTask = function (task) {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');

  label.innerText = task;
  checkBox.type = 'checkbox';

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
}

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  todoUl.appendChild(listItem);
  newTask.value = '';
  //bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
}

let completeTask = function () {
  let listItem = this.parentNode;

}

let bindInCompleteItems = function (taskItem, checkboxclick) {
  let checkBox = taskItem.querySelector('input[type = "checkBox"]');
  checkBox.onchange = checkboxclick;
}