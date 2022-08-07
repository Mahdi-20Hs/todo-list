import { createElements } from "./imports";
import {showForm, bindEventsToForm} from './taskForm.js';
import {renderTasks} from './renderTasks.js';
import {tasksContainer, addTaskBtn, container, taskDeleteBtns} from './DOM.js'
import { deleteTask } from "./deleteTask";

const header = createElements('h1', 'header', 'Home');
let homeTasks = [];
let deleteBtnsArray = Array.from(taskDeleteBtns);

addTaskBtn.addEventListener('click', () => {
  showForm();
  bindEventsToForm(homeTasks);
})

document.addEventListener('click', e => {
  if(e.target.matches('.task-delete-btn')){
    let index = deleteBtnsArray.indexOf(e.target);
    deleteTask(homeTasks, index);
    renderTasks(homeTasks)
  }
})

function renderHome(){
  renderTasks(homeTasks);
  container.appendChild(header);
  container.appendChild(tasksContainer)
}

export {renderHome}
