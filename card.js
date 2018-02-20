/* card
版本: 1.0.0.0
*/

function Card(name, rank, suit){ // Class
  /* Attrubutes */
  var name; // (String)
  var x; // location (int)
  var y; // location (int)
  var width; // (int)
  var height; // (int)
  var rank; // (int)
  var suit; // (string) 4 kinds: Organ, Pathogen, Disease, Immunity

  /* Initializer */
  this.name = name;
  this.x = 300;
  this.y = 250;
  this.width = 200;
  this.height = 100;
  this.rank = rank;
  this.suit = suit;

  /* Functions */
  this.show = function(){ // update screen (void)
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.width, this.height);
    textAlign(CENTER);
    fill(0);
    text(this.name, this.x + this.width * 0.5, this.y + this.height * 0.5 + 6);
    textAlign(LEFT, TOP);
    noFill();
    text(this.rank + ' ' + this.suit, this.x +6, this.y +6);
  }
}
