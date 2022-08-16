// elements from the form //
let formContainer = document.querySelector('.form-container');
let taskForm = document.querySelector('.task-form');
let addBtn = document.querySelector('.add-btn');
let cancelBtn = document.querySelector('.cancel-btn');

export {formContainer, taskForm, addBtn, cancelBtn};

// data from the form //
let title = document.querySelector('#titleInput');
let description = document.querySelector('#descriptionInput');
let priority = document.querySelector('#priorityInput');
let notes = document.querySelector('#notesInput');
let dueDate = document.querySelector('#dueDate');

export {title, description, priority, notes, dueDate};

// elements from main // 
let container = document.querySelector('.main');
let tasksContainer = document.querySelector('.tasks-container');
let addTaskBtn = createElements('div', 'add-task-btn', 'Add a new task');
let pageTitle = document.querySelector('.project-title');

export {tasksContainer,  addTaskBtn, container, pageTitle};

//elements from sidebar //
let sidebar = document.querySelector('.sidebar');
let sideTitle = document.querySelector('.side-title');
let sideDescription = document.querySelector('.side-description');
let sideDate = document.querySelector('.side-date');
let dateDiv = document.querySelector('.date-div');
let sidePriority = document.querySelector('.side-priority');
let priorityDiv = document.querySelector('.priority-div')
let high = document.querySelector('.high');
let medium = document.querySelector('.medium');
let low = document.querySelector('.low');
let sideNote = document.querySelector('.side-note');
let priorities = [high, medium, low];
let emptyElement = document.querySelector('.sidebar > h1');

export {sidebar, sideTitle, sideDescription, sideDate, priorities, sideNote, sidePriority, dateDiv, priorityDiv, emptyElement}

//elements from nav-list //
const navList = document.querySelector('.nav-list');
const navListDivs = document.querySelectorAll('.nav-list-divs');
const navListIcons = document.querySelectorAll('.navlist .icon');
const navListHeaders = document.querySelectorAll('.nav-list h3');
const homeBtn = document.querySelector('.home');
const weekBtn = document.querySelector('.week');
const todayBtn = document.querySelector('.today');
const projectsBtn = document.querySelector('.projects');
const projectsContainer = document.querySelector('.projects-container');
const arrowBtn = document.querySelector('.arrow-icon');
const projectInput = document.querySelector('.project-input');

export { navList, navListHeaders, homeBtn, weekBtn, todayBtn, projectsBtn, projectsContainer, navListDivs, navListIcons, arrowBtn, projectInput};

// functions used in different modules //
function createElements(type, className, content){
  const ele = document.createElement(`${type}`);
  if(className){
    ele.classList.add(`${className}`);
  }
  if(content){
    ele.textContent = content;
  }
  return ele
}


export {createElements};