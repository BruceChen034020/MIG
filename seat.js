/*
版本: 1.1.0.0
2019/4/29
*/
function Seat(x, y, w, id){ // Class
  /* Attrubutes */
  this.id = id; // ID (int)
  this.x = x; // location (int)
  this.y = y; // location (int)
  this.w = w; // diameter (int)
  this.player; // player sitting on it (Player)
  this.occupied = false; // this seat is occupied
  this.selected = false; // this seat is selected

  /* Initializer */


  /* Functions */
  this.contains = function(x, y){ // whether a point is contained in this seat (bool)
    var b = dist(x, y, this.x, this.y)<w/2;
    return b;
  }
  this.mousePressed = function(){ // click event (void)
    if(turnStatus == null){
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
    if(turnStatus == 'Attack'){
      if(this.player == me){
        alert("You can't attack yourself.");
        return;
      }
      if(this.player == null){
        alert("You can't attack [no player]");
        return;
      }
      this.selected = true;
      order.player = this.player;
      ConfirmButton.img = loadImage("confirm_red.png");
    }
  }
  this.show = function(){ // update screen (void)
    fill(0);
    ellipse(this.x, this.y, this.w);
    if((!this.occupied) && (!loading)){
      image(chair, this.x-25, this.y-25, 50, 50);
    }
    if(this.selected){
      stroke(255, 255, 0);
      strokeWeight(5);
      ellipse(this.x, this.y, this.w);
      stroke(0);
      strokeWeight(1);
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
      var so = 'Susceptible organs: ';
      for(var i=0; i<this.player.susceptibleOrgans.length; i++){
        so += this.player.susceptibleOrgans[i] + ', ';
      }
      if(this.player.susceptibleOrgans.length == 0){
        so += 'None..';
      }
      so = so.slice(0, -2);
      so += '.';
      text(so, this.x, this.y - this.w/2 - 15);
    }
  }
}
