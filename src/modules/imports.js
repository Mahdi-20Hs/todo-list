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
let deleteBtnsArray;
let taskTitlesArray;
let taskCheckboxArray;

function updateArrays(){
  let taskDeleteBtns = document.querySelectorAll('.task-delete-btn');
  let taskTitles = document.querySelectorAll('.task-title');
  let taskCheckboxs = document.querySelectorAll('.task-checkbox')

  deleteBtnsArray = Array.from(taskDeleteBtns);
  taskTitlesArray = Array.from(taskTitles);
  taskCheckboxArray = Array.from(taskCheckboxs);
}

export {createElements, updateArrays, deleteBtnsArray, taskTitlesArray, taskCheckboxArray};