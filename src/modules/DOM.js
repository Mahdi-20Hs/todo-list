import {createElements} from './imports.js';



let title = document.querySelector('#titleInput');
let description = document.querySelector('#descriptionInput');
let priority = document.querySelector('#priorityInput');
let notes = document.querySelector('#notesInput');
let dueDate = document.querySelector('#dueDate');

export {title, description, priority, notes, dueDate};

let formContainer = document.querySelector('.form-container');
let taskForm = document.querySelector('.task-form');
let addBtn = document.querySelector('.add-btn');
let cancelBtn = document.querySelector('.cancel-btn');

export {formContainer, taskForm, addBtn, cancelBtn};

let container = document.querySelector('.container');
let tasksContainer = createElements('div', 'tasks-container');
let addTaskBtn = createElements('div', 'addTaskBtn', '+');

export {tasksContainer, addTaskBtn, container};

let taskDeleteBtns = document.querySelectorAll('.task-delete-btn');
export {taskDeleteBtns}