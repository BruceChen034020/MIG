/* Turn Manager
版本: N/A */

function Turn(){

}

Turn.prototype.nextPlayer = function(){
  for(i=1; i<=seat.length; i++){
    var r = (turnPlayer+i)%seat.length;
    if(seat[r].occupied){
      if(r <= turnPlayer){
        turnNumber++;
        turnPlayer = r;
      }else{
        turnPlayer = r;
      }
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
  if(turnStatus == null){
    return null;
  }
}
