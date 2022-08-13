import { formContainer, taskForm, addBtn, cancelBtn } from "./DOM.js";
import {addTaskToArr} from "./addTask.js";
import {renderTasks} from './renderTasks.js';

function showForm(){
  formContainer.style.visibility = 'visible';
  taskForm.style.transform = 'scale(1)';
}
function hideForm(){
  taskForm.style.transform = 'scale(0)';
  formContainer.style.visibility = 'hidden';
}


function bindEventsToForm(arr){
  addBtn.addEventListener('click', () => {
    addTaskToArr(arr);
    renderTasks(arr);
    hideForm();

  }, {once: true})
  
  cancelBtn.addEventListener('click', () => {
    hideForm();
  });
}

export {showForm, hideForm, bindEventsToForm};