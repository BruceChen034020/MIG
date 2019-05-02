/*
版本: 1.1.0.0
2019/5/2
*/

function Deck(){
  /* Attributes */

  /* Initializer */

  /* Functions */
}

Deck.prototype.shuffle = function(a){ console.log('shuffle')
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  Deck.prototype.update();
}

Deck.prototype.pop = function(cards, update){ console.log('pop')
  p = cards.pop();

  if(update)
    Deck.prototype.update();
  return p;
}

Deck.prototype.add = function(deck, cards){ console.log('add')
  for(var i=0; i<cards.length; i++)
    deck.push(cards[i]);

  Deck.prototype.shuffle(deck);
}

Deck.prototype.deal = function(deck, player, numCard){ // 發牌
console.log('deal')

  var n = player.cards.length;
  for(var i=0; i<numCard; i++){

    player.cards[i+n] = Deck.prototype.pop(deck, false);
  }
  Deck.prototype.update();
}

Deck.prototype.clearPublic = function(publicCards, deck, update){ // 將所有 public card 放回抽牌區
console.log('clear public', update)
  if(update)
    Deck.prototype.add(deck, publicCards);
  for(var i=0; i<publicCards.length; i++){
    // publicCards[i].x_dst = publicCards[i].y_dst = -100;
    setTimeout(Deck.prototype.washCards, 1000);
  }
  setTimeout(Deck.prototype.clearPublic2, 1000);
}

Deck.prototype.clearPublic2 = function(){publicCards = [];}

Deck.prototype.washCards = function(){ console.log('wash cards')// wash away all marks
  for(var i=0; i<deck.length; i++){
    deck[i].bigMark = "";
  }
}

Deck.prototype.update = function(){ console.log('update')// update the deck information on server
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

Deck.prototype.copy = function(deck){ console.log('copy')
  var d = [];
  for(i=0; i<deck.length; i++){
    d[i] = deck[i];
  }
  return d;
}

function Deck_init(){ console.log('deck init')
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

Deck.prototype.check = function(){ // check if there is repeating cards or missing cards
  var count = [];
  for(var i=0; i<192; i++){
    count[i] = 0;
  }
  for(var i=0; i<deck.length; i++){
    count[deck[i].id]++;
  }
  for(var i=0; i<publicCards.length; i++){
    count[publicCards[i].id]++;
  }
  for(var i=0; i<player.length; i++){
    for(var j=0; j<player[i].cards.length; j++){
      count[player[i].cards[j].id]++;
    }
  }
  for(var i=0; i<192; i++){
    if(count[i] != 1){
      console.log(i + ' repeating ' + count[i] + ' times.');
    }
  }
  console.log('public cards');
  var s = ""
  for(var i=0; i<publicCards.length; i++){
    s += publicCards[i].id + ' ';
  }
  console.log(s);
  console.log('deck cards');
  var s = ""
  for(var i=0; i<deck.length; i++){
    s += deck[i].id + ' ';
  }
  console.log(s);
}
