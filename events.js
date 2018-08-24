/* events
版本: 1.0.0.10
2018/8/7
*/

/* Timed Events */
function sendOnline(){ // send a message to show you are online to the server

  if(!playing){
    var reff = database.ref('playing/' + ip);
    var dataa = {Ip: ip,
                Name: localStorage.getItem('name'),
                Playing: false,
                Seat: 0}
    reff.set(dataa);
    console.log(dataa);
  }else{
    var reff = database.ref('playing/' + ip);
    var dataa = {Ip: ip,
                Name: localStorage.getItem('name'),
                Playing: true,
                Seat: me.seat.id}
    reff.set(dataa);
    console.log(dataa);
  }

  var ref = database.ref('online/' + ip);
  var d = new Date();
  var data = {
    name: localStorage.getItem('name'),
    time: d.toString()
  }
  console.log(data);
  ref.set(data);

  setTimeout(sendOnline, 10000);
  loading = false;
}

/* Click Events */
function button1_Clicked(){ // click, set username (void)
  /* Change username */
  var userName = textBox1.value();
  localStorage.setItem("name", userName);

  /* Send record */
  var reff = database.ref('record');
  var now = new Date();
  var data = {
    Ip: ip,
    Name: localStorage.getItem('name'),
    Time: now.toString()
  }
  console.log(data);
  reff.push(data);
}

/* Value Events */
function gotData1(data){ // value online (void)
  console.log('value online');
  var listings = selectAll('.fuck');
  for(var i=0; i<listings.length; i++){
    listings[i].remove();
  }

  var dt = data.val();

  if(dt==null){
    return;
  }
  onlineList = [];
  var keys = Object.keys(dt);
  for(var i=0; i<keys.length; i++){
    var k = keys[i];
    var n = dt[k].name;
    var t = new Date(dt[k].time);

    var now = new Date();

    if(t.getTime() > now.getTime() - 30000){

      var li = createElement('li', n + ' is online');
      if(!Naive)
       if(playingData[k].Playing){

         li.html(n + ' is online (playing)');
       }
      li.class('fuck');
      li.parent(ol1);
      onlineList.push(k);

    }
  }
console.log(onlineList)
  if(onlineList.length == 0){
    console.log('Game start!');
    deck = Deck_init();
    Turn.prototype.gameStart();
  }
}

function errData1(err){ // value (void)
  console.log("Error!");
  console.log(err);
}

function gotData2(data){ // value playing (void)
  console.log('Value playing');
  var dt = data.val();
  if(Naive){
    playingData = dt;
    Naive = false;
    return;
  }
  for(var i=0; i<onlineList.length; i++){

    if(dt[onlineList[i]].Playing){if(!seat[dt[onlineList[i]].Seat].occupied){ // a player sits down
      var p;

      if(Player.prototype.Contains(player, onlineList[i])){
        var index = Player.prototype.IndexOf(player, onlineList[i]);

        p = player[index];

      }else{
        p = new Player();

      }
      var d = dt[onlineList[i]];
      p.name = d.Name;
      p.ip = d.Ip;
      p.seat = seat[d.Seat];
      seat[d.Seat].player = p;
      seat[d.Seat].occupied = true;
      player.push(p);
      if(dt[onlineList[i]].Ip == ip){
        me = p;
        playing = true;

        /* upload turn */
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
    }}

    if((!dt[onlineList[i]].Playing) && seat[playingData[onlineList[i]].Seat].occupied){

      var d = playingData[onlineList[i]];

      var index = player.indexOf(seat[d.Seat].player);
      console.log(index);
      player.slice(index, 1);
      seat[d.Seat].player = null;
      seat[d.Seat].occupied = false;
      if(dt[onlineList[i]].Ip == ip){
        playing = false;
      }
    }

  }
  playingData = dt;
}

function errData2(err){ // value (void)
  console.log("Error!");
  console.log(err);
}

function gotData3(data){ // value deck (void)
  var dt = data.val();
  deck = [];
  for(var i=0; i<dt.Count; i++){
    id = dt['d'+i];
    deck[i] = cardList[id];
  }
}

function errData3(err){ // value (void)
  console.log("Error!");
  console.log(err);
}

function gotData4(data){ // value turn (void)
  var dt = data.val();
  if(loading){
    turnNumber = dt['turnNumber'];
    turnPlayer = dt['player'];
    return;
  }
  if(playing){

    if(dt['player'] == me.seat.id){ // my turn
      timeLeft = timeLeftInit;
      turnStatus = "Nothing";
      Deck.prototype.deal(deck, me, 2);
    }else{
      timeLeft = 0;
      turnStatus = null;
    }
    turnNumber = dt['turnNumber'];

    turnPlayer = dt['player'];
  }
}

function errData4(err){ // value (void)
  console.log("Error!");
  console.log(err);
}

function gotData5(data){ // value order (void)
  if(loading){
    return;
  }
  var dt = data.val();
  if(dt['Ip'] == ip){
    this.x_dst = 300;
    this.y_dst = 250;
    var index = me.cards.indexOf(cardList[dt.Card]);
    me.cards.splice(index, 1);
    publicCards.push(cardList[dt.Card]);
  }else{
    srcPointX = seat[dt.Player].x;
    srcPointY = seat[dt.Player].y;
    c = cardList[dt.Card];
    c.x = srcPointX;
    c.y = srcPointY;
    publicCards.push(c);
  }
  if(dt['Player'] == me.seat.id){
    if(turnStatus == null){
      turnStatus = 'Attacked';
    }
  }
  if(dt.Other == 'Attack'){


  }
  order = new Order(dt.Card, dt.Player, dt.Other);
}

function errData5(err){ // value (void)
  console.log("Error!");
  console.log(err);
}
