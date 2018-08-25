/* 1.0.1.5
2018/8/25 */

function FlyingNumber(text_, locationX, locationY, fontSize, Rr, Gg, Bb, fillR, fillG, fillB, Vx, Vy, duration){
  this.text = text_;
  this.locationX = locationX;
  this.locationY = locationY;
  this.fontSize = fontSize;
  this.Rr = Rr;
  this.Gg = Gg;
  this.Bb = Bb;
  this.fillR = fillR;
  this.fillG = fillG;
  this.fillB = fillB;
  this.Vx = Vx; // x velocity
  this.Yy = Vy; // y velocity
  this.time = 0;
  this.duration = duration; // how long this flying number should exist
  this.show = function(){

    textAlign(CENTER);
    stroke(Rr, Gg, Bb);
    fill(fillR, fillG, fillB);
    textSize(fontSize);
    text(this.text, this.locationX, this.locationY);
    textSize(12);
    this.locationX += Vx;
    this.locationY += Vy;
    this.time++;
    if(this.time>this.duration){
      this.text = "";
      flyingNumbers.splice( flyingNumbers.indexOf(this), 1 );
    }
  }

}
