# todo-list


window.onload = function(){
  renderHome()
}

let formContainer = document.querySelector('.form-container');
let container = document.querySelector('.container')

home.addEventListener('click', () => {
  document.querySelector('.tasks-container').innerHTML = '';
  document.querySelector('.sidebar').innerHTML = '';
  container.innerHTML = '';

  container.append(formContainer);
  renderHome();
})

today.addEventListener('click', () => {
  document.querySelector('.tasks-container').innerHTML = '';
  document.querySelector('.sidebar').innerHTML = '';
  container.innerHTML = '';

  container.append(formContainer);
  renderToday();
})



