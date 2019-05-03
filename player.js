/*
版本: 1.1.0.0
2019/5/3
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
  this.susceptibleOrgans = []; // susceptible organs (string list)

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
  this.printCards = function(){
    console.log(this.cards.length + ' cards');
    var s = ""
    for(var i=0; i<this.cards.length; i++){
      s += this.cards[i].id + ' ';
    }
    console.log(s);
  }
  this.equals = function(player){
    if(this.ip == player.ip){
      return true;
    }else{
      return false;
    }
  }

  this.reduceBlood = function(loss){ // 扣血並更新 server

    this.blood -= loss;

    if(this.blood <=0){
      // game over
    }
    Blood = {'Ip': ip, 'Name': localStorage.getItem('name')};
    for(var i=0; i<player.length; i++){
      Blood[player[i].ip] = player[i].blood;
    }

    this.blood += loss; // 為了讓特效出來
    var d = new Date();
    Blood['Time'] = d.toString();
    var ref = database.ref('blood');

    ref.set(Blood);
    turnStatus = null;
    Deck.prototype.clearPublic(publicCards, deck, true);
  }
  this.SendOrgan = function(){ // If I get an organ, I should send it to the top of my seat
    // this is for 'me' only. Do not use it to other players.
    var t = this;
   setTimeout(function(){
    for(var i=0; i<t.cards.length; i++){

      if(t.cards[i].suit == 'Organ'){

          t.susceptibleOrgans.push(t.cards[i].name);
          var index = i;
          publicCards.push(t.cards[i]);
          t.cards.splice(index, 1);

      }
    }
    var ref = database.ref('susceptibleOrgans/');
    var d = new Date();
    var s1 = '';
    var s2 = '';
    var s3 = '';
    var s4 = '';
    if(seat1.player != undefined){
      s1 = seat1.player.susceptibleOrgansString();
    }
    if(seat2.player != undefined){
      s2 = seat2.player.susceptibleOrgansString();
    }
    if(seat3.player != undefined){
      s3 = seat3.player.susceptibleOrgansString();
    }
    if(seat4.player != undefined){
      s4 = seat4.player.susceptibleOrgansString();
    }
    var data = {
      s1: s1,
      s2: s2,
      s3: s3,
      s4: s4
    }

    ref.set(data);
   }, 2000);
  }

  this.susceptibleOrgansString = function(){

    var so = 'Susceptible organs: ';
    for(var i=0; i<this.susceptibleOrgans.length; i++){
      so += this.susceptibleOrgans[i] + ', ';
    }
    if(this.susceptibleOrgans.length == 0){
      so += 'None..';
    }
    so = so.slice(0, -2);
    so += '.';
    return so;
  }

  //this.SendOrgan(); // part of initialization

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
