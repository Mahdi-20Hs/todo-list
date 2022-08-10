import { createElements, deleteBtnsArray, taskTitlesArray, taskCheckboxArray } from "./imports";
import {showForm, bindEventsToForm} from './taskForm.js';
import {renderTasks} from './renderTasks.js';
import {tasksContainer, addTaskBtn, container, taskDeleteBtns, taskTitles, sidebar} from './DOM.js'
import { deleteTask } from "./deleteTask";
import { populateSidebar, emptySidebar} from "./sidebar";
import { checkTask, uncheckTask } from "./checkTask";
import { changeDate } from "./changeDate";
import { changePriority } from "./changePriority";

const header = createElements('h1', 'header', 'Home');
let homeTasks = [];

emptySidebar(homeTasks, 0)

addTaskBtn.addEventListener('click', () => {
  showForm();
  bindEventsToForm(homeTasks);
})

document.addEventListener('click', e => {
  if(e.target.matches('.task-delete-btn')){
    let index = deleteBtnsArray.indexOf(e.target);
    emptySidebar(homeTasks, index)
    deleteTask(homeTasks, index);
    renderTasks(homeTasks)
  }
})

document.addEventListener('click', e => {
  if(e.target.matches('.task-title')){
    if(!e.target.classList.contains('checked')){
      let index = taskTitlesArray.indexOf(e.target);
      populateSidebar(homeTasks, index)
    }
  }
})

document.addEventListener('change', e => {
  if(e.target.matches('.task-checkbox')){
    let index = taskCheckboxArray.indexOf(e.target);

    if(e.target.checked){
      checkTask(homeTasks, index);
      renderTasks(homeTasks);
      emptySidebar(homeTasks, index)
    }else{
      uncheckTask(homeTasks, index);
      renderTasks(homeTasks);
    }
  }
})

document.addEventListener('change', e => {
  if(e.target.matches('.side-date')){
    changeDate(homeTasks);
    renderTasks(homeTasks);
  }
})

document.addEventListener('change', e => {
  if(e.target.matches('.side-priority')){
    changePriority(homeTasks);
    renderTasks(homeTasks);
  }
})

function renderHome(){
  renderTasks(homeTasks);
  container.append(header, tasksContainer, sidebar)
}

export {renderHome}
