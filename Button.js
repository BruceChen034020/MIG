/*
版本: 1.0.0.4
*/

function SquareButton(x, y, img, width, height, action){
  /* Attrubutes */
  this.x = x;
  this.y = y;
  this.img = img; // background image
  this.width = width;
  this.height = height;
  this.action = action; // action after clicked
  // action: stand_up, confirm,

  /* Initializer */

  /* Functions */
  this.show = function(){
    image(this.img, this.x, this.y, this.width, this.height);
  }
  this.contains = function(x, y){
    var b1 = this.x < x && x < this.x + this.width;
    var b2 = this.y < y && y < this.y + this.height;
    return b1 && b2
  }
  this.mousePressed = function(){

    if(loading){
      return;
    }
    if(this.action == 'stand_up'){
      var ref = database.ref('playing/' + ip);
      var data = {Ip: ip,
                  Name: localStorage.getItem('name'),
                  Playing: false,
                  Seat: 0}
      ref.set(data);
    }
  }
}
