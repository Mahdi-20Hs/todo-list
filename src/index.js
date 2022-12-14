import './assets/styles/main.css';
import { renderTasks } from './modules/renderTasks';
import { pageTitle, addTaskBtn, createElements, homeBtn, weekBtn, todayBtn, projectsContainer } from './modules/DOM';
import { bindEventsToForm, showForm } from './modules/taskForm';
import { emptySidebar, populateSidebar } from './modules/sidebar';
import { deleteTask } from './modules/deleteTask';
import { checkTask, uncheckTask } from './modules/checkTask';
import { changeDate } from './modules/changeDate';
import { changePriority } from './modules/changePriority';
import { changeStyle, onloadStyle } from './modules/changeStyle';

changeStyle()
function findObject(target){
  let obj;
  for(let i = 0; i < pages.length; i++){
    if(pages[i].title === target.textContent){
      obj = pages[i];
      break;
    }
  }
  return obj;
}
function findIndex(arr, target){
  let index
  for(let i = 0; i < arr.length; i++){
    if(arr[i].title == target.textContent){
      index = i;
      break;
    }
  }
  return index;
}
function checkProjectName(name){
  let projectNames = Array.from(document.querySelectorAll('.custom-project'));
  for(let i in projectNames){
    if(projectNames[i].textContent === name){
      alert('Choose a different name');
      return false
    }else{
      return true
    }
  }
  return true
}



let addProjectBtn = createElements('div', 'add-project-btn', 'Add new project');
projectsContainer.append(addProjectBtn);


addProjectBtn.addEventListener('click', () => {

  projectsContainer.removeChild(projectsContainer.lastChild);
  let div = createElements('div', 'input-container');

  let projectInput = createElements('input', 'project-input');
  let addProject = createElements('span', 'add-project');
  let cancelProject = createElements('span', 'cancel-project');
  div.append(projectInput, addProject, cancelProject);

  projectInput.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
      let projectTitle = document.querySelector('.project-input').value;
      if(checkProjectName(projectTitle) === true){
        let project = {};
        project.title = projectTitle;
        project.tasks = [];
        pages.push(project);

        let projectElement = createElements('div', `custom-project`, `${projectTitle}`);
        projectsContainer.removeChild(projectsContainer.lastChild);
        projectsContainer.append(projectElement);
        projectsContainer.append(addProjectBtn);
      }
    }
  })
  projectsContainer.append(div);
});

document.addEventListener('click', e => {
  if(e.target.matches('.add-project')){
    let projectTitle = document.querySelector('.project-input').value;

    if(checkProjectName(projectTitle) === true){
      let project = {};
      project.title = projectTitle;
      project.tasks = []
      pages.push(project);

      let projectElement = createElements('div', `custom-project`, `${projectTitle}`);
      projectsContainer.removeChild(projectsContainer.lastChild);
      projectsContainer.append(projectElement);
      projectsContainer.append(addProjectBtn);
    }
  }
})


document.addEventListener('click', e => {
  if(e.target.matches('.cancel-project')){
    projectsContainer.removeChild(projectsContainer.lastChild);
    projectsContainer.append(addProjectBtn);
  }
})

document.addEventListener('click', e => {
  if(e.target.matches('.custom-project')){
    let obj = findObject(e.target);
    pageTitle.textContent = obj.title;
    renderTasks(obj.tasks);
  }
})

let homePage = {
  title: 'Home',
  tasks: [],
}
let todayPage = {
  title: 'Today',
  tasks: [],
};
let weekPage = {
  title: 'week',
  tasks: [],
};
let pages = [homePage, todayPage, weekPage];


window.onload = function(){
  pageTitle.textContent = homePage.title;
  renderTasks(homePage.tasks);
  emptySidebar([], 0);
  onloadStyle()
};

homeBtn.addEventListener('click', () => {
  pageTitle.textContent = homePage.title;
  renderTasks(homePage.tasks);
});

todayBtn.addEventListener('click', () => {
  pageTitle.textContent = todayPage.title;
  renderTasks(todayPage.tasks);
});

weekBtn.addEventListener('click', () => {
  pageTitle.textContent = weekPage.title;
  renderTasks(weekPage.tasks);
});

addTaskBtn.addEventListener('click', () => {
  let obj = findObject(pageTitle);
  let arr = obj.tasks;
  showForm();
  bindEventsToForm(arr);
});


document.addEventListener('click', e => {
  if(e.target.matches('.task-title')){
    let obj = findObject(pageTitle)
    let arr = obj.tasks;
    let index =findIndex(arr, e.target);
    populateSidebar(arr, index);
  }
})

document.addEventListener('click', e => {
  if(e.target.matches('.task-delete-btn')){
    let obj = findObject(pageTitle)
    let arr = obj.tasks;
    let index = findIndex(arr, e.target.parentElement.children[1]);

    emptySidebar(arr, index);
    deleteTask(arr, index);
    renderTasks(arr)
  }
})

document.addEventListener('click', e => {
  if(e.target.matches('.task-checkbox')){
    let obj = findObject(pageTitle)
    let arr = obj.tasks;
    let index = findIndex(arr, e.target.parentElement.children[1]);

    if(arr[index].checked === false){
      checkTask(arr, index);
      emptySidebar(arr, index)
    }else{
      uncheckTask(arr,index)
    }

    renderTasks(arr);
  }
})

document.addEventListener('change', e => {
  if(e.target.matches('.side-date')){
    let obj = findObject(pageTitle)
    let arr = obj.tasks;
    changeDate(arr);
    renderTasks(arr)
  }
});

document.addEventListener('change', e => {
  if(e.target.matches('.side-priority')){
    let obj = findObject(pageTitle)
    let arr = obj.tasks;
    changePriority(arr);
    renderTasks(arr);
  }
})



