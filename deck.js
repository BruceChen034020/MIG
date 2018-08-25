/*
版本: 1.0.1.5
2018/8/25
*/

function Deck(){
  /* Attributes */

  /* Initializer */

  /* Functions */
}

Deck.prototype.shuffle = function(a){
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  Deck.prototype.update();
}

Deck.prototype.pop = function(cards, update){
  p = cards.pop();

  if(update)
    Deck.prototype.update();
  return p;
}

Deck.prototype.add = function(deck, cards){
  for(var i=0; i<cards.length; i++)
    deck.push(cards[i]);

  Deck.prototype.shuffle(deck);
}

Deck.prototype.deal = function(deck, player, numCard){ // 發牌

  var n = player.cards.length;
  for(var i=0; i<numCard; i++){

    player.cards[i+n] = Deck.prototype.pop(deck, false);
  }
  Deck.prototype.update();
}

Deck.prototype.clearPublic = function(publicCards, deck, update){ // 將所有 public card 放回抽牌區

  if(update)
    Deck.prototype.add(deck, publicCards);
  for(var i=0; i<publicCards.length; i++){
    // publicCards[i].x_dst = publicCards[i].y_dst = -100;
    setTimeout(Deck.prototype.washCards, 1000);
  }
  setTimeout(Deck.prototype.clearPublic2, 1000);
}

Deck.prototype.clearPublic2 = function(){publicCards = [];}

Deck.prototype.washCards = function(){ // wash away all marks
  for(var i=0; i<deck.length; i++){
    deck[i].bigMark = "";
  }
}

Deck.prototype.update = function(){ // update the deck information on server
  var l = [];

  for(var i=0; i<deck.length; i++){
    l[i] = deck[i].id;
  }

  var ref = database.ref('deck/');
  var now = new Date();
  var data = {Ip: ip,
              Name: localStorage.getItem('name'),
              Time: now.toString(),
              Count: deck.length}
  for(var i=0; i<deck.length; i++){
    data['d'+i.toString()] = l[i];
  }

  ref.set(data);
}

Deck.prototype.copy = function(deck){
  var d = [];
  for(i=0; i<deck.length; i++){
    d[i] = deck[i];
  }
  return d;
}

function Deck_init(){
  d = Deck.prototype.copy(cardList);
  Deck.prototype.shuffle(d);

  return d;
}

Deck.prototype.printSequence = function(){
  var str = "";
  for(var i=0; i<deck.length; i++){
    str += deck[i].id + " ";
  }
  console.log(str);
}
