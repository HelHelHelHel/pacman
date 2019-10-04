class Pacman {
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.mouthRight = 0;
    this.mouthUp = 0;
    this.mouthLeft = 0;
    this.mouthDown = 0;
    this.mouth = '5em';
    this.face = '1em';
  }

  move() {
    if (event.key === 'ArrowRight') {
      if (this.mouthRight === '5em') {
        this.mouthRight = '1em';
      } else this.mouthRight = '5em';
      this.xPos += 85;
    }
    if (event.key === 'ArrowLeft') {
      if (this.mouthLeft === '5em') {
        this.mouthLeft = '1em';
      } else this.mouthLeft = '5em';
      this.xPos -= 85;
    }
    if (event.key === 'ArrowUp') {
      if (this.mouthUp === -85) {
        this.mouthUp = '1em';
      } else this.mouthUp = '5em';
      this.yPos += 85;
    }
    if (event.key === 'ArrowDown') {
      if (this.mouthDown === '5em') {
        this.mouthDown = '1em';
      } else this.mouthDown = '5em';
      this.yPos -= 85;
    }
  }
}
/* if (event.key === 'ArrowRight') {
  this.face = '1em';
  if (this.mouth === '5em') {
    this.mouth = '1em';
  } else {
    this.mouth = '5em';
  }
  this.xPos += 85;
}
if (event.key === 'ArrowUp') {
  if (this.face !== 85) {
    this.face = 85;
  }
  if (this.mouth === '5em') {
    this.mouth = '1em';
  } else {
    this.mouth = '5em';
  }
  this.yPos += 85;
} */
