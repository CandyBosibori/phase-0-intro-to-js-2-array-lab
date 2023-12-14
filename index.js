// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function  destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function  destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function  destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

 // Assuming you have an array to store cats

// 1) Appends a cat to the cats array and returns a new array
function appendCat(name) {
  let newCats = [...cats, name];
  return newCats;
}

// 2) Prepends a cat to the cats array and returns a new array
function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats;
}

// 3) Removes the last cat in the cats array and returns a new array
function removeLastCat() {
  if (cats.length === 0) {
    return cats; // If there are no cats, return the unchanged array
  }

  let newCats = cats.slice(0, -1);
  return newCats;
}

// 4) Removes the first cat from the cats array and returns a new array
function removeFirstCat() {
  if (cats.length === 0) {
    return cats; // If there are no cats, return the unchanged array
  }

  let newCats = cats.slice(1);
  return newCats;
}
