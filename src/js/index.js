console.log(Pacman);
const pacGuy = new Pacman(85);


const update = () => {
  document.getElementById('pacman').style.left = `${pacGuy.xPos}px`;
  document.getElementById('pacman').style.backgroundPositionX = `${pacGuy.mouth}`;
  console.log(pacGuy.mouth);
};


document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (event) => {
    pacGuy.moveRight();
    update();
  });
});
