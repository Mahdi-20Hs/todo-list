import { tasksContainer, addTaskBtn } from "./DOM";
import { createElements } from "./imports";
import { updateArrays } from "./imports";

let deleteBtns = []


function createTaskElement(task){
  let element = createElements('div', 'task-element');

  let checkbox = createElements('input', 'task-checkbox');
  checkbox.type = 'checkbox';

  let title = createElements('div', 'task-title', task.title);

  let priorityElement = createElements('div', 'task-priority');
  priorityElement.textContent = task.priority;

  if(task.checked === true){
    checkbox.checked = 'checked';
    title.classList.add('checked');
    priorityElement.classList.add('checked');
  }
  
  let dueDate = createElements('div', 'task-due-date');
  dueDate.textContent = task.dueDate;

  let deleteBtn = createElements('div', 'task-delete-btn');
  deleteBtns.push(deleteBtn);

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
  updateArrays()
}

export {renderTasks, deleteBtns}