document.addEventListener('DOMContentLoaded', () => {
  const stageClick = document.querySelector('.container');
  stageClick.addEventListener('click', () => {
    const pacman = document.querySelector('#pacman');
    if (pacman.style.backgroundPositionX === '100%') {
      pacman.style.backgroundPositionX = '0%';
    } else pacman.style.backgroundPositionX = '100%';
  });
});
