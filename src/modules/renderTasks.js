import { tasksContainer, addTaskBtn, createElements } from "./DOM";

function createTaskElement(task){

  let element = createElements('div', 'task-element');
  let checkbox = createElements('input', 'task-checkbox');
  let title = createElements('div', 'task-title', task.title);
  let priorityElement = createElements('div', 'task-priority');
  let dueDate = createElements('div', 'task-due-date');
  let deleteBtn = createElements('div', 'task-delete-btn');

  dueDate.textContent = task.dueDate;
  checkbox.type = 'checkbox';
  priorityElement.textContent = task.priority;

  if(task.checked === true){
    checkbox.checked = 'checked';
    title.classList.add('checked');
    priorityElement.classList.add('checked');
    dueDate.classList.add('checked')
  }

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