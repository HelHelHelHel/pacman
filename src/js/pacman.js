
class Pacman {
  constructor(xPos) {
    this.xPos = xPos;
    // this.mouth = 'closed';
    this.mouth = '5em';
  }


  moveRight() {
    if (event.key === 'ArrowRight') {
    //   if (this.mouth === 'closed') {
    //     this.mouth = 'open';

      //   } else this.mouth = 'open';
      if (this.mouth === '5em') {
        this.mouth = '1em';
      } else this.mouth = '5em';
      this.xPos += 85;
    }
  }
}
