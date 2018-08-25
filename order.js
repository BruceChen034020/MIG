/*
版本: 1.0.1.5
2018/8/25
*/

function Order(card, player, other, srcSeatNumber){
  /* Attrubutes */
  this.card = card; // (Card) before request sent or (int) after request received
  this.player = player; // (Player) before request sent or (int) after request received
  this.other = other; // other information (string)
  this.srcSeatNumber = srcSeatNumber; // source seat number (int)

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
