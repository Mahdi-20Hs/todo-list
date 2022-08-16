import { navListDivs, navListIcons, navList, navListHeaders, arrowBtn, projectsContainer, projectInput } from "./DOM";

function changeStyle(){
  navListDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.children[0].classList.add('hovered');
      if(div.children[2]){
        div.children[2].classList.add('hovered')
      }
    })

    div.addEventListener('mouseout', () => {
      div.children[0].classList.remove('hovered');
      if(div.children[2]){
        div.children[2].classList.remove('hovered');
      }
    })

    div.addEventListener('click', () => {
      if(!div.classList.contains('projects')){
        navListDivs.forEach((i) => {
          i.classList.remove('clicked')
          i.children[0].style.filter = 'invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%)';
          if(i.children[2]){
            i.children[2].style.filter = 'invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%)';
          }
          let projects = Array.from(projectsContainer.children);
          projects.forEach((project) => {
          project.classList.remove('clicked')
          })
        });
        
        div.classList.add('clicked');
        div.children[0].style.filter = 'invert(19%) sepia(11%) saturate(2%) hue-rotate(117deg) brightness(93%) contrast(95%)';
        if(div.children[2]){
          div.children[2].style.filter = 'invert(19%) sepia(11%) saturate(2%) hue-rotate(117deg) brightness(93%) contrast(95%)';
        }
      }
    })
  })

  navList.addEventListener('mouseover', () => {
    navList.style.width = '200px'
    navListHeaders.forEach((header) => {
      header.style.visibility = 'visible';
    });
    arrowBtn.style.visibility = 'visible';
  })

  navList.addEventListener('mouseout', () => {
    if(arrowBtn.style.transform != 'rotate(180deg)'){
      navList.style.width = '65px'
      navListHeaders.forEach((header) => {
        header.style.visibility = 'hidden';
      });
      arrowBtn.style.visibility = 'hidden';
      arrowBtn.style.transitionDuration = '0s';
    }else{
      navList.style.width = '200px'
    }
  })

  arrowBtn.addEventListener('click', () => {
    if(arrowBtn.style.transform != 'rotate(180deg)'){
      arrowBtn.style.transitionDuration = '0.2s'
      arrowBtn.style.transform = 'rotate(180deg)'
      projectsContainer.style.visibility = 'visible';
    }else{
      arrowBtn.style.transform = 'none';
      projectsContainer.style.visibility = 'hidden';
    }
  })

  document.addEventListener('click', e => {
    if(e.target.matches('.custom-project')){
      navListDivs.forEach((i) => {
        i.classList.remove('clicked')
        i.children[0].style.filter = 'invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%)';

        if(i.children[2]){
          i.children[2].style.filter = 'invert(99%) sepia(99%) saturate(2%) hue-rotate(321deg) brightness(106%) contrast(100%)';
        };
        let projects = Array.from(projectsContainer.children);
        projects.forEach((project) => {
          project.classList.remove('clicked')
        })
      });
      e.target.classList.add('clicked');
    }
  })
  
}

export { changeStyle }