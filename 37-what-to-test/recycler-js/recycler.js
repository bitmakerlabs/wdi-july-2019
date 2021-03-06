const food = ['Spoiled Vegetable','Spoiled Fruit','Moldy Bread'];
const plastic = ['Soda Bottle','Yoghurt Cup','Shampoo Bottle',
  'Sandwich Bag','Milk Bag'];
const metal = ['Soda Can','Cat Food Tin','Paint Can','Aluminum Tray'];
const glass = ['Glass Bottle','Jar'];
const paper = ['Newspaper','Birthday Card','Toilet Paper Roll'];
const garbage = ['Old Shoes','Black Plastic','Coffee Cup','Frayed Cable',
  'Cassette','VHS Tape'];

const junk = food.concat(plastic).concat(metal)
  .concat(glass).concat(paper);

let material = {
  garbage: 0, compost: 0, metal: 0, glass: 0, paper: 0, plastic: 0
};

function getRandomJunk(num) {
  if (num) {
    let randomJunk = [];
    for (var i = 0; i < num; i++) {
      randomJunk.push(junk[Math.floor(Math.random()*junk.length)]);
    }
    return randomJunk;
  } else {
    return junk[Math.floor(Math.random()*junk.length)];
  }
}

function isCompostable(item) {
  return food.includes(item);
}

function isRecyclable(item) {
  return plastic.concat(metal).concat(glass).concat(paper)
    .includes(item);
}

function isGarbage(item) {
  return !isCompostable(item) && !isRecyclable(item);
}

function compost(items) {
  let compostable = items.filter(item => isCompostable(item));
  let nonCompostable = items.filter(item => !isCompostable(item));

  if (compostable.length > 0 && nonCompostable === 0) {
    material.compost += compostable.length;
    return true;
  } else {
    return false;
  }
}

function recycle(items) {
  let recyclable = items.filter(item => isRecyclable(item));
  let nonRecyclable = items.filter(item => !isRecyclable(item));

  if (recyclable.length > 0 && nonRecyclable.length === 0) {
    material.plastic += recyclable.filter(item => plastic.includes(item)).length;
    material.metal += recyclable.filter(item => metal.includes(item)).length;
    material.glass += recyclable.filter(item => glass.includes(item)).length;
    material.paper += recyclable.filter(item => paper.includes(item)).length;

    return true;
  } else {
    return false;
  }
}

function toss(items) {
  if (items) {
    material.garbage += items.length;
    return true;
  } else {
    return false;
  }
}

function sortJunk(items) {
  compost(items.filter(item => isCompostable(item)));
  recycle(items.filter(item => isRecyclable(item)));
  toss(items.filter(item => isGarbage(item)));
  return true;
}

function getMaterial() {
  return material;
}

function emptyMaterial() {
  material = {
    garbage: 0, compost: 0, metal: 0, glass: 0, paper: 0, plastic: 0
  };
  return material;
}

module.exports = {
  getRandomJunk,
  isCompostable,
  isRecyclable,
  compost,
  recycle,
  toss,
  sortJunk,
  getMaterial,
  emptyMaterial
}
