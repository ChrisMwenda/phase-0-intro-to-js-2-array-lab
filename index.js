const cats=["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  
function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat("Ralph");

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat (name) {
    cats.unshift(name);
}
destructivelyPrependCat ("Bob");


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveLastCat (name){
    cats.pop (name)
}
destructivelyRemoveLastCat("Garfield")

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});
function destructivelyRemoveFirstCat (name){
  cats.shift (name)
}
destructivelyRemoveFirstCat("Milo");

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function appendCat (name) {
  const copyOfCats = [...cats, name];
  return copyOfCats
}
appendCat("Broom");

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function prependCat (name) {
  const copyOfCats =[name,...cats];
  return copyOfCats
}
prependCat("Arnold");

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function removeLastCat () {
  const copyOfCats = cats.slice(0,cats.length-1);
  return copyOfCats;
}
removeLastCat();

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function removeFirstCat () {
  const copyOfCats = cats.slice(1);
  return copyOfCats;
}
removeLastCat();

