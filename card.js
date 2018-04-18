/* card
版本: 1.0.0.10
*/

function Card(name, rank, suit, id){ // Class
  /* Attrubutes */
  var name; // (String)
  var x; // location (int)
  var y; // location (int)
  var x_dst; // Location x destination (int)
  var y_dst; // Location y destination (int)
  var width; // (int)
  var height; // (int)
  var rank; // (int)
  var suit; // (string) 4 kinds: Organ, Pathogen, Disease, Immunity

  /* Initializer */
  this.name = name;
  this.x = this.x_dst = 300;
  this.y = this.y_dst = 250;
  this.width = 200;
  this.height = 100;
  this.rank = rank;
  this.suit = suit;
  this.id = id; // ID of this card
  this.selected = false;
  this.gray = false;

  /* Functions */
  this.show = function(){ // update screen (void)
    if(this.gray){
      stroke(0);
      fill(128);
    }else{
      stroke(0);
      fill(255);
    }
    rect(this.x, this.y, this.width, this.height);
    textAlign(CENTER);
    fill(0);
    text(this.name, this.x + this.width * 0.5, this.y + this.height * 0.5 + 6);
    textAlign(LEFT, TOP);
    noFill();
    text(this.rank + ' ' + this.suit, this.x +6, this.y +6);

    this.x = this.x*(2/3) + this.x_dst*(1/3);
    this.y = this.y*(2/3) + this.y_dst*(1/3);


    if(this.selected){
      stroke(255, 255, 0);
      strokeWeight(5);
      rect(this.x, this.y, this.width, this.height);
      stroke(0);
      strokeWeight(1);
    }

    if(playing)
      if(me.cards.indexOf(this) > -1){
        if(turnStatus == "Nothing"){
          if(this.suit == 'Pathogen'){
            this.gray = false;
          }else{
            this.gray = true;
          }
        }
        if(turnStatus == 'Attack'){

        }
        if(turnStatus == null){

        }
      }

  }
  this.contains = function(x, y){
    if(this.x < x && x < this.x+this.width && this.y < y && y < this.y+this.height){
      return true;
    }else{
      return false;
    }
  }
  this.mousePressed = function(){
    if(turnStatus == null){ // not my turn
      return;
    }
    if(me.cards.indexOf(this) > -1){
      if(turnStatus == 'Nothing'){
        if(this.suit == 'Pathogen'){

          turnStatus = 'Attack';
          timeLeft = timeLeftInit;
          for(var i=0; i<me.cards.length; i++){
            me.cards[i].selected = false;
          }
          this.selected = true;
        }else if(this.suit == 'Disease'){

        }else if(this.suit == 'Organ'){

        }else if(this.suit == 'Immunity'){

        }else{
          this.x_dst = 300;
          this.y_dst = 250;
          var index = me.cards.indexOf(this);
          me.cards.splice(index, 1);
          publicCards.push(this);
        }
      }
      if(turnStatus == 'Attack'){

      }
      if(turnStatus == 'Discard'){
        this.x_dst = 300;
        this.y_dst = 250;
        var index = me.cards.indexOf(this);
        me.cards.splice(index, 1);
        publicCards.push(this);
        if(me.cards.length <= me.blood*2){
          Turn.prototype.nextPlayer();
        }
      }
    }
  }
  this.setLocation = function(x, y){
    this.x_dst = x;
    this.y_dst = y;
  }
}

Card.prototype.publicCardsDisplay = function(){
  switch(publicCards.length){
    case 1:
      publicCards[0].setLocation(300, 250);
      break;
    case 2:
      publicCards[0].setLocation(300, 200);
      publicCards[1].setLocation(300, 300);
      break;
    case 3:
      publicCards[0].setLocation(200, 200);
      publicCards[1].setLocation(200, 300);
      publicCards[2].setLocation(400, 200);
      break;
    case 4:
      publicCards[0].setLocation(200, 200);
      publicCards[1].setLocation(200, 300);
      publicCards[2].setLocation(400, 200);
      publicCards[3].setLocation(400, 300);
      break;
  }
}
