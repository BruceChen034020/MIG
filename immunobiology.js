/*
1.0.1.8
2018/9/4
*/
function immuneDeal(){ // 抽牌判斷是否有效
  //if(order.other == "Immune")
    order.other = 'ImmuneDeal';
  order.card.selected = false;

  ord = order; // 不用 toDict
console.log('line 11'); console.log(ord.other)
  /* 抽牌 */
  var c = Deck.prototype.pop(deck, true);
  var b = immuneDecision(cardList[order.card].immuneEffective, c.rank, c);
  var ref = database.ref('order');
  var d = new Date();
  var data = {Ip: ip,
              Name: localStorage.getItem('name'),
              srcSeatNumber: me.seat.id,
              Card: c.id,
              Player: ord.player,
              Other: ord.other,
              Time: d.toString(),
              Effective: b}
  ref.set(data);
console.log('line 26')
  if(!b){
    me.reduceBlood(1);
  }
}

function immuneDecision(effectiveNumber, randomNumber, immuneCard){ // 是否有效 (bool). effectiveNumber(int array), randomNumber(int)
  var c = immuneCard;
  if(c.annotation2.includes("EE")){
    return true;
  }
  if(effectiveNumber.includes(randomNumber)){
    return true;
  }else{
    return false;
  }
}
