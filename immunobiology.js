/*
1.0.1.6
2018/8/25
*/
function immuneDeal(){ // 抽牌判斷是否有效
  order.other = 'ImmuneDeal';
  order.card.selected = false;

  ord = order; // 不用 toDict

  /* 抽牌 */
  var c = Deck.prototype.pop(deck, true);
  var b = immuneDecision(cardList[order.card].immuneEffective, c.rank);
  var ref = database.ref('order');
  var data = {Ip: ip,
              Name: localStorage.getItem('name'),
              srcSeatNumber: me.seat.id,
              Card: c.id,
              Player: ord.player,
              Other: ord.other,
              Effective: b}
  ref.set(data);

  setTimeout(Deck.prototype.clearPublic(publicCards, deck, true), 3000);
  if(!b){
    me.reduceBlood();
  }
}

function immuneDecision(effectiveNumber, randomNumber, immuneCard){ // 是否有效 (bool). effectiveNumber(int array), randomNumber(int)
  var c = immuneCard;
  if(effectiveNumber.includes(randomNumber)){
    return true;
  }else{
    return false;
  }
}
