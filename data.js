function Pet(name, species, awesomeness){
  this.name = name;
  this.species = species;
  this.awesomeness = awesomeness;
}

var bob = new Pet("Bob", "Dinosaur", 10);
var cecil = new Pet("Cecil", "Dinosaur", 8);
var millie = new Pet("Millie", "Unicorn", 3);
var tyler = new Pet("Tyler", "Unicorn", 1);
var clarice = new Pet("Clarice", "Dinosaur", 7);

var dinosaurs = [bob, cecil, clarice];
var unicorns = [millie, tyler];
var pets = dinosaurs.concat(unicorns);
