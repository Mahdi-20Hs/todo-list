import { tasksContainer, addTaskBtn } from "./DOM";
import { createElements } from "./imports";

function createTaskElement(task){
  let element = createElements('div', 'task-element');

  let checkbox = createElements('input', 'task-checkbox');
  checkbox.type = 'checkbox';

  let title = createElements('div', 'task-title', task.title);

  let priorityElement = createElements('select', 'task-priority');
  let high = createElements('option',undefined, 'High');
  let medium = createElements('option',undefined, 'Medium')
  let low = createElements('option',undefined, 'Low')

  if(task.priority == 'High'){
    high.setAttribute('selected', 'selected')
  }else if(task.priority == 'Medium'){
    medium.setAttribute('selected', 'selected');
  }else{
    low.setAttribute('selected', 'selected');
  }
  
  priorityElement.append(high, medium, low);

  let dueDate = createElements('input', 'task-due-date');
  dueDate.value = task.dueDate;

  let deleteBtn = createElements('div', 'task-delete-btn');

  element.append(checkbox, title, priorityElement, dueDate, deleteBtn);
  return element
}

function renderTasks(tasks){
  tasksContainer.innerHTML = '';
  for(let i in tasks){
    let taskElement = createTaskElement(tasks[i]);
    tasksContainer.appendChild(taskElement);
  }
  tasksContainer.appendChild(addTaskBtn);
}

export {renderTasks}