import { sideTitle, sidePriority } from "./sidebar";

function findIndex(arr){
  let index;
  for(let i=0; i<arr.length; i++){
    if(arr[i].title === sideTitle.textContent.split(' ')[1]){
      index = i;
    }
  }
  return index;
}

function changePriority(arr){
  let index = findIndex(arr);
  arr[index].priority = sidePriority.value;
}

export {changePriority};