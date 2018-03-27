/*
版本: 1.0.0.6
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

Deck.prototype.pop = function(cards){
  p = cards.pop();
  Deck.prototype.update();
  return p;
}

Deck.prototype.add = function(deck, card){
  deck += [card];
  Deck.prototype.shuffle(deck);
  Deck.prototype.update();
}

Deck.prototype.deal = function(deck, player, numCard){ // 發牌
  for(var i=0; i<numCard; i++){

    player.cards[i] = Deck.prototype.pop(deck);
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
