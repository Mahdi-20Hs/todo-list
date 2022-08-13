import {title, description, priority, notes, dueDate} from './DOM.js';

function CreateTask(){
  let titles = Array.from(document.querySelectorAll('.task-title'));
  let task = {};

  for(let i in titles){
    if(titles[i].textContent === title.value){
      alert('Choose a different name');
      return;
    }
  }
  task.title = title.value;
  task.dueDate = dueDate.value;
  task.description = description.value;
  task.priority = priority.value;
  task.notes = notes.value;
  task.checked = false;
  titles.push(title.value);
  return task
}

function addTaskToArr(arr){
  let task = CreateTask()
  if(task !== undefined){
    arr.push(task)
  }
}

export {addTaskToArr};