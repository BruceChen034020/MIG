/*
感謝您觀看這份程式碼
作品名稱: 微免牌
作者: 陳光穎 Bruce Chen
聯絡方式
  Facebook連結: https://www.facebook.com/bruce.chen.372
  LINE ID: brucechen0
最後修改日期: 2018/2/20
版本: 1.0.0.3
發表於: https://brucechen034020.github.io/
程式碼尺度
  N/A
作者註解:
  1. 如本網頁有 bug 請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  2. 如有任何建議，請用 Facebook(Messenger) 通知 Bruce Chen，謝謝。
  */

/* Global variables */
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
var playingData; // gotValue
var playing = false; // this client is playing
var Naive = true;
var loading = true; // The website is loading and not ready to use
var me; // me (Player)

/* p5 functions */
function setup(){
  $('body').on('contextmenu', 'canvas', function(e){ return false; });

  $.getJSON('https://freegeoip.net/json/', function(data) {
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

  ref1.on('value', gotData1, errData1);
  ref2.on('value', gotData2, errData2);

  // Initailize document.body elements
  label1 = createElement('label', 'Your name: ');
  label1.parent(document.body)
  textBox1 = createInput('');
  setTimeout(function(){ textBox1.value(localStorage.getItem('name')); }, 3000);
  button1 = createButton('Set');
  button1.mousePressed(button1_Clicked);
  createP('');

  createCanvas(800, 600);
  var card1 = new Card('E. coli', 4, 'Pathogen');
  fill(0, 64, 0);
  rect(200, 200, 400, 200);
  card1.show();

  p1 = createP('3 people online');

  ol1 = createElement('ol');
  ol1.parent(document.body);

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

  setTimeout(sendOnline, 3000);
}

function draw(){

  for(var i=1; i<=4; i++){
    seat[i].show();
  }

  /* Count online people */
  var listings = selectAll('.fuck');
  var n = listings.length;
  p1.html(n + ' people online');
}

function mousePressed(e){
  for(i=1; i<=4; i++){
    if(seat[i].contains(mouseX, mouseY)){
      seat[i].mousePressed();
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
