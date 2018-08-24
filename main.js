/*
感謝您觀看這份程式碼
作品名稱: 微免牌
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2018/8/24
版本: 1.0.1.3
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
var cardList = []; // list of all cards
var deck = []; // 抽排區 (Card array)
var seat1; // right seat (Player)
var seat2; // lower seat(Player)
var seat4; // upper seat (Player)
var seat3; // left seat (Player)
var seat = []; // seat list (Seat list)
var player = []; // player list (Player list)
var database; // firebase database
var onlineList; // online ip list (string array)
var ol1; // online name list (ol)
var ip; // IP adress of the client
var p1; // online count (p)
var label1; // Your name: (Label)
var textBox1; // 同上 (textarea)
var button1; // set your name (button)
var chair; // (Image) sitDown.png
var male; // (Image) male.jpg
var female; // (Image) female.jpg
var playingData; // gotValue (dict)
var playing = false; // this client is playing (bool)
var Naive = true; // (bool)
var loading = true; // The website is loading and not ready to use (bool)
var me; // me (Player)
var publicCards = []; // cards on the table (Card list)
var StandUpButton; // the topright stand up button (SquareButton)
var ConfirmButton; // 確定 (SquareButton)
var CancelButton; // 取消 (SquareButton)
var EndButton; // 結束 (SquareButton)
var turnStatus; // me 現在在幹嘛? 非 me 的 turn => null. null(not my turn), Nothing(未選牌), Attack(選了牌未攻擊), Discard(棄牌階段), Freeze(攻擊了別人等回應), Attacked(被攻擊做回應), Idu(以毒攻毒), Immune(免疫)
var turnNumber = 0; // turn number (int)
var turnPlayer = 0; // index of seat of player who is turn (int)
var timeLeft; // time left for this player to move (milisecond) (int)
var timeLeftInit = 10000; // time for every player to move (miliseconds) (int)
var order; // the last order player committed

/* p5 functions */
function setup(){
  var AccDate;
  $('body').on('contextmenu', 'canvas', function(e){ return false; });
  $.get("http://api.timezonedb.com/v2/get-time-zone?key=3VBOX4LLE9RK&format=json&by=zone&zone=America/Chicago")
  .done(function(data){AccDate = data.timestamp - data.gmtOffset;
    var clientDate = new Date();
    clientDate = clientDate.getTime()/1000;
    console.log(AccDate, clientDate);
    if(Math.abs(AccDate-clientDate)>7){
      alert("你的電腦時間太不準了!\r\n請調整時間，以免影響到遊戲進行。謝謝。\r\nThe time (clock) in your computer is not accurate. This might affect the experience of other players. Please correct it. Thank you.")
    }
  });
  $.getJSON('https://ipapi.co/json/', function(data) { // API Key: b5c4be0c53d08e80b83b110beec9a01c
    console.log(JSON.stringify(data, null, 2));
    var userName = data['ip']
    userName += ' (' + (data['country_name']) + ')';
    if(localStorage.getItem("name") == null || localStorage.getItem("name") == undefined)
      localStorage.setItem("name", userName);
    ip = userName.replace('.', '-');
    ip = ip.replace('.', '-');
    ip = ip.replace('.', '-');
    ip = ip.replace('.', '-');
    ip = ip.replace(' ', '-');
    ip = ip.replace('(', '');
    ip = ip.replace(')', '');
    ip = '-' + ip;
  });

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5BrmP7KbN_VPtUIu-8FIbczBY73thvrI",
    authDomain: "microbiology-immunobiologygame.firebaseapp.com",
    databaseURL: "https://microbiology-immunobiologygame.firebaseio.com",
    projectId: "microbiology-immunobiologygame",
    storageBucket: "",
    messagingSenderId: "776637408495"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  /* set ref.on */
  var ref1 = database.ref('online');
  var ref2 = database.ref('playing');
  var ref3 = database.ref('deck');
  var ref4 = database.ref('turn');
  var ref5 = database.ref('order');

  ref1.on('value', gotData1, errData1);
  ref2.on('value', gotData2, errData2);
  ref3.on('value', gotData3, errData3);
  ref4.on('value', gotData4, errData4);
  ref5.on('value', gotData5, errData5);

  // Initailize document.body elements
  label1 = createElement('label', 'Your name: ');
  label1.parent(document.body)
  textBox1 = createInput('');
  setTimeout(function(){ textBox1.value(localStorage.getItem('name')); }, 3000);
  button1 = createButton('Set');
  button1.mousePressed(button1_Clicked);
  createP('');

  createCanvas(800 +900, 600 +120);
  publicCards[0] = new Card('E. coli', 4, 'Pathogen');

  p1 = createP('3 people online');

  ol1 = createElement('ol');
  ol1.parent(document.body);

  /* Create elements in canvas */
  chair = loadImage("./sitDown.png");
  male = loadImage("male.jpg");
  female = loadImage("female.jpg");
  seat3 = new Seat(100, 300, 100, 3);
  seat1 = new Seat(700, 300, 100, 1);
  seat4 = new Seat(400, 75, 100, 4);
  seat2 = new Seat(400, 500, 100, 2);
  seat[0] = new Seat(0, 0, 0, 0); // padding
  seat[1] = seat1;
  seat[2] = seat2;
  seat[3] = seat3;
  seat[4] = seat4;

  StandUpButton = new SquareButton(720, 10, loadImage("standUp.png"), 69, 19, 'stand_up');
  ConfirmButton = new SquareButton(250, 670, loadImage("confirm.png"), 100, 36, 'confirm');
  CancelButton = new SquareButton(450, 670, loadImage("cancel.png"), 100, 36, 'cancel');
  EndButton = new SquareButton(600, 670, loadImage("end.png"), 80, 36, 'end');

  /* Initialize cardList */
  cardList = CardList_init();

  setTimeout(sendOnline, 3000);
order = new Order(null, null, null);
}

function draw(){
console.log(turnStatus)
  frameRate(10);
  background(255);
  fill(0, 64, 0);
  rect(200, 200, 400, 200);
  Card.prototype.publicCardsDisplay();
  for(var i=0; i<publicCards.length; i++){
    publicCards[i].show();
  }
  for(var i=1; i<=4; i++){
    seat[i].show();
  }
  StandUpButton.show();
  if(!loading)
    Turn.prototype.releaseTurn();

  /* Count online people */
  var listings = selectAll('.fuck');
  var n = listings.length;
  p1.html(n + ' people online');

  /* 顯示手排 */

  if(playing){
    //console.log(me.cards.length)
    for(var i=0; i<me.cards.length; i++){
      me.cards[i].x_dst = 850;
      me.cards[i].y_dst = i*150+40;
    }
    if(me.cards.length > 4){
      for(var i=4; i<me.cards.length; i++){
        me.cards[i].x_dst = 1100;
        me.cards[i].y_dst = (i-4)*150+40;
      }
    }
    if(me.cards.length > 8){
      for(var i=8; i<me.cards.length; i++){
        me.cards[i].x_dst = 1350;
        me.cards[i].y_dst = (i-8)*150+40;
      }
    }
    for(var i=0; i<me.cards.length; i++){

      me.cards[i].show();
    }
  }

  /* Draw time bar */
  stroke(0);
  rect(270, 650, 260, 9);
  fill(255, 0, 0);
  if(turnStatus != null)
    timeLeft -= 50;
  rect(270, 650, timeLeft/timeLeftInit * 260, 9);
  if(timeLeft < 0 && turnStatus != null && turnStatus != undefined && turnStatus != 'Attacked' && turnStatus != 'Idu' && turnStatus != 'Immune'){

    Turn.prototype.nextPlayer();
  }
  if(timeLeft < 0 && !(turnStatus != 'Attacked' && turnStatus != 'Idu' && turnStatus != 'Immune')){ // 迪摩根

    me.reduceBlood(1);
  }

  /* 右上角 */
  textAlign(RIGHT);
  stroke(255, 0, 0);
  fill(255, 255, 0);
  textSize(24);
  textFont('標楷體');
  text('第 ' + str(turnNumber) + ' 輪', 800, 50);
  textSize(18);
  stroke(0);
  fill(255);
  text('剩餘牌 ' + str(deck.length), 800, 80);
  textFont('Arial');
  stroke(0);
  noFill();
  textSize(12);

  /* 下面 */
  if(playing)
    if(turnPlayer == me.seat.id){ // my turn
      ConfirmButton.show();
      CancelButton.show();
      EndButton.show();
      textAlign(CENTER);
      textSize(18);
      text(Turn.prototype.MessageText(), 400, 630);
      textSize(12);
    }
    if(turnStatus != null){
      ConfirmButton.show();
      CancelButton.show();
      EndButton.show();
      textAlign(CENTER);
      textSize(18);
      text(Turn.prototype.MessageText(), 400, 630);
      textSize(12);
    }
}

function mousePressed(e){
  for(i=1; i<=4; i++){
    if(seat[i].contains(mouseX, mouseY)){
      seat[i].mousePressed();
    }
  }

  if(StandUpButton.contains(mouseX, mouseY)){

    StandUpButton.mousePressed();
  }
  if(EndButton.contains(mouseX, mouseY)){
    EndButton.mousePressed();
  }
  if(ConfirmButton.contains(mouseX, mouseY)){
    ConfirmButton.mousePressed();
  }
  if(CancelButton.contains(mouseX, mouseY)){
    CancelButton.mousePressed();
  }

  for(var i=0; i<me.cards.length; i++){
    if(me.cards[i].contains(mouseX, mouseY)){
      me.cards[i].mousePressed();
    }
  }
  for(var i=0; i<publicCards.length; i++){
    if(publicCards[i].contains(mouseX, mouseY)){
      //publicCards[i].mousePressed();
    }
  }
}

/* User defined functions */
function dist(x1, y1, x2, y2){ // distance between 2 points
  var a = x1 - x2;
  var b = y1 - y2;

  var c = Math.sqrt( a*a + b*b );
  return c;
}
