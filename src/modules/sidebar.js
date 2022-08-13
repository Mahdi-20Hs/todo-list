import {sideTitle, sideDescription, sideDate, priorities, sideNote, sidePriority, dateDiv, priorityDiv, emptyElement} from "./DOM";

function populateSidebar(arr, index){
  let task = arr[index];

  sideTitle.textContent = `Title: ${task.title}`;
  sideDescription.textContent = `Description: ${task.description}`;
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

  sideNote.textContent = `Notes: ${task.notes}`;

  sideTitle.style.display = 'flex';
  sideDescription.style.display = 'flex';
  dateDiv.style.display = 'flex';
  priorityDiv.style.display = 'flex';
  sideNote.style.display = 'flex';
  emptyElement.style.display = 'none'
}


function emptySidebar(arr, index){
  let task = arr[index];
  
  if(task === undefined){
    emptyElement.style.display = 'block'

  }else if(task.title === sideTitle.textContent.split(' ')[1]){
    sideTitle.style.display = 'none';
    sideDescription.style.display = 'none';
    dateDiv.style.display = 'none';
    priorityDiv.style.display = 'none';
    sideNote.style.display = 'none';
    emptyElement.style.display = 'block'
  }
}

export {populateSidebar, emptySidebar, sideTitle, sideDate, sidePriority};