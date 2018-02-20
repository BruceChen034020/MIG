/*
版本: 1.0.0.0
*/
function Player(){ // Class
  /* Attributes */
  this.name; // (string)
  this.ip; // IP adress (string)
  this.cards; // 手牌 (Card array)
  this.seat; // (Seat)
  this.playing; // playing the game (bool)
  this.sex; // sex (int) 1=male 2=female
  this.profile; // profile picture

  /* Initializer */
  var r = random(1);
  if(r<0.5){
    this.sex = 2; // f
    this.profile = female;
  }else{
    this.sex = 1; // m
    this.profile = male;
  }

  /* Functions */
  this.equals = function(player){
    if(this.ip == player.ip){
      return true;
    }else{
      return false;
    }
  }
}
