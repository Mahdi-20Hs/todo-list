function checkTask(arr, index){
  let task = arr[index];
  task.checked = true;
}

function uncheckTask(arr, index){
  let task = arr[index];
  task.checked = false
}

export {checkTask, uncheckTask}