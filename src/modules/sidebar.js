import { sidebar } from "./DOM";
import {createElements} from './imports';

let sideTitle = createElements('div', 'side-title');
let sideDescription = createElements('div', 'side-description');

let sideDate = createElements('input', 'side-date');
sideDate.type = 'date';
let dateLabel = createElements('div', 'date-label', 'Due Date:')
let dateDiv = createElements('div', 'side-date-div');
dateDiv.append(dateLabel, sideDate);


let sidePriority = createElements('select', 'side-selection');
let high = createElements('option',undefined, 'High');
let medium = createElements('option',undefined, 'Medium');
let low = createElements('option',undefined, 'Low');
sidePriority.append(high, medium, low);
let priorities = [high, medium, low]

let sideNote = createElements('textarea', 'side-note');

function populateSidebar(arr, index){
  let task = arr[index];
  sideTitle.textContent = `Title: ${task.title}`;
  sideDescription.textContent = `Description: ${task.description}`;
  sideDate.value = task.dueDate;

  priorities.forEach((item) => {
    item.removeAttribute('selected')
  })
  if(task.priority == 'High'){
    high.setAttribute('selected', 'selected');
  }else if(task.priority == 'Medium'){
    medium.setAttribute('selected', 'selected');
  }else{
    low.setAttribute('selected', 'selected');
  }

  sideNote.textContent = task.notes;

  sidebar.innerHTML = '';
  sidebar.append(sideTitle, dateDiv, sideDescription, sidePriority, sideNote);
}

const emptyEle = createElements('h1', 'empty', 'Select a task');
emptyEle.style.color = 'gray';
emptyEle.style.textAlign = 'center'
emptyEle.style.margin = 'auto';
emptyEle.style.alignSelf = 'center'

function emptySidebar(arr, index){
  let task = arr[index];

  if(sidebar.innerHTML === ''){
    sidebar.append(emptyEle);

  }else if(task.title === sideTitle.textContent.split(' ')[1]){
    sidebar.innerHTML = '';
    sidebar.append(emptyEle);
  }
}
export {populateSidebar, emptySidebar, sideTitle, sideDate};