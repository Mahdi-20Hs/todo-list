import {title, description, priority, notes, dueDate} from './DOM.js'

function CreateTask(){
  let task = {};
  task.title = title.value;
  task.dueDate = dueDate.value;
  task.description = description.value;
  task.priority = priority.value;
  task.notes = notes.value;
  task.checked = false;
  return task
}

function addTaskToArr(arr){
  let task = CreateTask()
  arr.push(task)
}

export {addTaskToArr};