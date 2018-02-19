/*
版本: N/A
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
  this.mousePressed = function(){
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
    if(!this.occupied){
      image(chair, this.x-25, this.y-25, 50, 50);
    }
    if(this.occupied){
      image(this.player.profile, this.x-40, this.y-40, 80, 80);
    }
  }
}
