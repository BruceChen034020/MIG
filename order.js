/*
版本: 1.0.0.7
*/

function Order(card, player, other){
  /* Attrubutes */
  this.card = card;
  this.player = player;
  this.other = other; // other information

  /* Initializer */

  /* Functions */
  this.toDict = function(){
    c = this.card.id;
    p = this.player.seat.id;
    an = this.other;
    d = {Card: c,
         Player: p,
         Other: an}
  }
}
