import {titleDiv, sideTitle, descriptionDiv, sideDescription, dateDiv, sideDate, priorityDiv, sidePriority, priorities, noteDiv, sideNote, emptyElement} from "./DOM";

function populateSidebar(arr, index){
  let task = arr[index];

  sideTitle.textContent = `${task.title}`;
  sideDescription.textContent = `${task.description}`;
  sideDate.value = task.dueDate;

  priorities.forEach((item) => {
    item.removeAttribute('selected')
  })
  if(task.priority == 'High'){
    priorities[0].setAttribute('selected', 'selected');
  }else if(task.priority == 'Medium'){
    priorities[1].setAttribute('selected', 'selected');
  }else{
    priorities[2].setAttribute('selected', 'selected');
  }

  sideNote.textContent = `${task.notes}`;

  titleDiv.style.display = 'grid';
  descriptionDiv.style.display = 'block';
  dateDiv.style.display = 'grid';
  priorityDiv.style.display = 'grid';
  noteDiv.style.display = 'block';
  emptyElement.style.display = 'none'
}


function emptySidebar(arr, index){
  let task = arr[index];
  
  if(task === undefined){
    emptyElement.style.display = 'block'

  }else if(task.title === sideTitle.textContent.split(' ')[1]){
    titleDiv.style.display = 'none';
    descriptionDiv.style.display = 'none';
    dateDiv.style.display = 'none';
    priorityDiv.style.display = 'none';
    noteDiv.style.display = 'none';
    emptyElement.style.display = 'block'
  }
}

export {populateSidebar, emptySidebar, sideTitle, sideDate, sidePriority};