/* Turn Manager
版本: 1.0.1.3 */

function Turn(){

}

Turn.prototype.nextPlayer = function(){
  if(!playing){
    return;
  }

  /* 棄置卡牌 */
  if(me.cards.length > me.blood*2){
    if(turnStatus == 'Discard'){
      /* 自動棄牌 */

    }
    turnStatus = 'Discard';
    timeLeft = timeLeftInit;
    return;
  }

  for(i=1; i<=seat.length; i++){
    var r = (turnPlayer+i)%seat.length;
    if(seat[r].occupied){

      if(r <= turnPlayer){
        turnNumber++;
        turnPlayer = r;
      }else{
        turnPlayer = r;
      }
      break;
    }
  }
  var ref = database.ref('turn/');
  var d = new Date();
  var data = {
    name: localStorage.getItem('name'),
    time: d.toString(),
    turnNumber: turnNumber,
    player: turnPlayer
  }

  ref.set(data);
}

Turn.prototype.gameStart = function(){

  turnNumber = 0;
  turnPlayer = 0;
  Turn.prototype.nextPlayer();
}

Turn.prototype.releaseTurn = function(){ // Making sure that current turnPlayer makes sense.
  if(seat[turnPlayer].player != null){

  }else{
    Turn.prototype.nextPlayer();
  }
}

Turn.prototype.MessageText = function(){ // return the text showing the message at 下面
  if(turnStatus == "Nothing"){
    return "出牌階段, 請選擇一張卡牌";
  }
  if(turnStatus == 'Attack'){
    return "請選擇一位玩家, 作為攻擊的目標";
  }
  if(turnStatus == 'Discard'){
    return "您需要棄置 " + (me.cards.length-me.blood*2) + "張卡牌, 請選牌";
  }
  if(turnStatus == 'Freeze'){
    return "";
  }
  if(turnStatus == 'Attacked'){

    return (seat[order.srcSeatNumber].player.name) + " 對你使用了 Pathogen, 請以毒攻毒或使用免疫";
  }
  if(turnStatus == 'Idu'){
    return "以毒攻毒";
  }
  if(turnStatus == 'Immune'){
    return "使用免疫";
  }
  if(turnStatus == 'Attacked2'){
    return "對方使用以毒攻毒之術反攻了, 快想辦法吧!";
  }
  if(turnStatus == null){ // not my turn
    return 'null';
  }
}
