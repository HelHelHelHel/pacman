document.addEventListener('DOMContentLoaded', () => {
  let xpos = 0;
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      xpos += 85;
      console.log(xpos);
      document.getElementById('pacman').style.left = `${xpos}px`;
    }
  });
});
