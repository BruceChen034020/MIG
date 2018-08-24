/*
版本: 1.0.1.3
2018/8/24
*/

function Order(card, player, other, srcSeatNumber){
  /* Attrubutes */
  this.card = card;
  this.player = player;
  this.other = other; // other information
  this.srcSeatNumber = srcSeatNumber;

  /* Initializer */

  /* Functions */
  this.toDict = function(){
    c = this.card.id;
    p = this.player.seat.id;
    an = this.other;
    d = {Card: c,
         Player: p,
         Other: an}
    return d;
  }
}
