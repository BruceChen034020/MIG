/*
版本: 1.0.1.5
2018/8/25
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
        turnStatus = 'Freeze';
      }
      if(turnStatus == 'Idu'){
        order.other = 'Counter_Attack';
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
        turnStatus = null;
      }
      if(turnStatus == 'Immune'){
        order.other = 'Immune';
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
        setTimeout(immuneDeal, 1000);
      }
      ConfirmButton.img = loadImage("confirm.png");
    }
    if(this.action == 'end'){
      if(turnStatus == 'Attacked' || turnStatus=='Idu' || turnStatus=='Immune' || turnStatus=='Attacked2'){

        me.reduceBlood(1);
      }else{
        Turn.prototype.nextPlayer();
      }
      for(var i=0; i<me.cards.length; i++){
        me.cards[i].selected = false;
      }
      for(var i=0; i<seat.length; i++){
        seat[i].selected = false;
      }
    }
    if(this.action == 'cancel'){
      if(turnStatus == null || !(turnStatus != 'Attacked' && turnStatus != 'Idu' && turnStatus != 'Immune') || turnStatus == 'Freeze' || turnStatus == 'Attacked2'){ // not my turn or freeze
        return;
      }
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
