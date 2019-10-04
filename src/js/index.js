console.log(Pacman);
const pacGuy = new Pacman(0, 0);

const update = () => {
  document.getElementById('pacman').style.left = `${pacGuy.xPos}px`;
  document.getElementById('pacman').style.bottom = `${pacGuy.yPos}px`;
  document.getElementById('pacman').style.backgroundPositionX = `${pacGuy.mouthRight}`;
  document.getElementById('pacman').style.backgroundPositionY = `${pacGuy.mouthDown}`;
};

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    pacGuy.move();
    update();
  });
});
