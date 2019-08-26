function newCat(name, preferredFood, mealTime) {
  return {
    name,
    preferredFood,
    mealTime
  }
}

function eatsAt(cat) {
  if (cat.mealTime == 0) {
    return '12AM';
  } else if (cat.mealTime < 13) {
    return `${cat.mealTime}AM`;
  } else if (cat.mealTime >= 13 && cat.mealTime < 24) {
    return `${cat.mealTime - 12}PM`;
  } else {
    return 'invalid';
  }
}

function meow(cat) {

}

module.exports = {
  newCat, eatsAt, meow
}
