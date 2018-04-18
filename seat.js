/*
版本: 1.0.0.6
*/
function Seat(x, y, w, id){ // Class
  /* Attrubutes */
  this.id = id; // ID (int)
  this.x = x; // location (int)
  this.y = y; // location (int)
  this.w = w; // diameter (int)
  this.player; // player sitting on it (Player)
  this.occupied = false; // this seat is occupied

  /* Initializer */


  /* Functions */
  this.contains = function(x, y){ // whether a point is contained in this seat (bool)
    var b = dist(x, y, this.x, this.y)<w/2;
    return b;
  }
  this.mousePressed = function(){ // click event (void)
    if(loading){
      return;
    }
    if(this.occupied){
      alert("此座位已有人。");
      return;
    }
    if(playing){
      alert("不能同時坐兩個座位。");
      return;
    }
    var ref = database.ref('playing/' + ip);
    var data = {Ip: ip,
                Name: localStorage.getItem('name'),
                Playing: true,
                Seat: this.id}
    ref.set(data);
  }
  this.show = function(){ // update screen (void)
    fill(0);
    ellipse(this.x, this.y, this.w);
    if((!this.occupied) && (!loading)){
      image(chair, this.x-25, this.y-25, 50, 50);
    }
    if(this.occupied){
      image(this.player.profile, this.x-40, this.y-40, 80, 80);
      stroke(0);
      noFill();
      rect(this.x-this.w/2, this.y+this.w/2 +10, this.w, 15);
      fill(255, 0, 0);
      rect(this.x-this.w/2, this.y+this.w/2 +10, this.player.blood*this.w/5, 15);
      textAlign(CENTER);
      fill(0);
      stroke(255, 0, 0);
      text(this.player.blood, this.x, this.y + this.w/2 + 30);
      stroke(0);
    }
  }
}
