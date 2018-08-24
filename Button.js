/*
版本: 1.0.1.1
2018/8/20
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
    if(this.action == 'confirm'){
      if(turnStatus == 'Attack'){
        console.log('cli')
        order.other = 'Attack';
        order.card.selected = false;
        order.player.seat.selected = false;
        console.log(order);
        ord = order.toDict();

        var ref = database.ref('order');
        var data = {Ip: ip,
                    Name: localStorage.getItem('name'),
                    srcSeatNumber: me.seat.id,
                    Card: ord.Card,
                    Player: ord.Player,
                    Other: ord.Other}
        ref.set(data);
      }
      ConfirmButton.img = loadImage("confirm.png");
      turnStatus = 'Freeze';
    }
    if(this.action == 'end'){
      Turn.prototype.nextPlayer();
      if(turnStatus == 'Attacked' || turnStatus=='Idu' || turnStatus=='Immune'){
        
      }
    }
    if(this.action == 'cancel'){
      turnStatus = 'Nothing';
      timeLeft = timeLeftInit;
      for(var i=0; i<me.cards.length; i++){
        me.cards[i].selected = false;
      }
      for(var i=0; i<seat.length; i++){
        seat[i].selected = false;
      }
      ConfirmButton.img = loadImage("confirm.png");
    }
  }
}
