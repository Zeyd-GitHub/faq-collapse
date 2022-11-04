const icon_containers = document.querySelectorAll('.icon_container');
const icons = document.querySelectorAll('.icon_container i');
const boxes = document.querySelectorAll('.box');

icon_containers.forEach((icon_container) => {
  icon_container.addEventListener('click', () => {
    icon_container.parentElement.classList.toggle('active');
  });
});
