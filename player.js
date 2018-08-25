/*
版本: 1.0.1.5
2018/8/25
*/
function Player(){ // Class
  /* Attributes */
  this.name; // (string)
  this.ip; // IP adress (string)
  this.cards = []; // 手牌 (Card array)
  this.seat; // (Seat)
  this.playing; // playing the game (bool)
  this.sex; // sex (int) 1=male 2=female
  this.profile; // profile picture
  this.blood = 5; // 血

  /* Initializer */
  var r = random(1);
  if(r<0.5){
    this.sex = 2; // f
    this.profile = female;
  }else{
    this.sex = 1; // m
    this.profile = male;
  }
  Deck.prototype.deal(deck, this, 5);

  /* Functions */
  this.equals = function(player){
    if(this.ip == player.ip){
      return true;
    }else{
      return false;
    }
  }
  this.reduceBlood = function(loss){ // 扣血並更新 server
    console.log(this.blood);
    this.blood -= loss;
    console.log(this.blood)
    if(this.blood <=0){
      // game over
    }
    Blood = {'Ip': ip, 'Name': localStorage.getItem('name')};
    for(var i=0; i<player.length; i++){
      Blood[player[i].ip] = player[i].blood;
    }
    console.log(Blood)
    this.blood += loss; // 為了讓特效出來
    var d = new Date();
    Blood['Time'] = d.toString();
    var ref = database.ref('blood');
console.log(Blood)
    ref.set(Blood);
    turnStatus = null;
    Deck.prototype.clearPublic(publicCards, deck, true);
  }
}

Player.prototype.Contains = function(list, ip){ // player list, string
  for(var i=0; i<list.length; i++){
    if(list[i].ip == ip){
      return true;
    }
  }
  return false;
}

Player.prototype.IndexOf = function(list, ip){ // player list, string
  for(var i=0; i<list.length; i++){
    if(list[i].ip == ip){
      return i;
    }
  }
}
