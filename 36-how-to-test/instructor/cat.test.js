const { newCat, eatsAt, meow } = require('./cat');

test("newCat returns a new cat object", () => {
  // arrange
  let name = 'Wiggles';
  let preferredFood = 'tuna';
  let mealTime = 2;

  // act
  let cat = newCat(name, preferredFood, mealTime);

  // assert
  expect(cat).toEqual(
    {name: 'Wiggles', preferredFood: 'tuna', mealTime: 2}
  );
});

test("eatsAt when given 0 returns 12AM", () => {
  // arrange
  let cat = newCat('Wiggles', 'tuna', 0);

  // act
  let result = eatsAt(cat);

  // assert
  expect(result).toEqual("12AM");
});

test("eatsAt when given 1 returns 1AM", () => {
  // arrange
  let cat = newCat('Wiggles', 'tuna', 1);

  // act
  let result = eatsAt(cat);

  // assert
  expect(result).toEqual("1AM");
});
//
test("eatsAt when given 13 returns 1PM", () => {
  // arrange
  let cat = newCat('Wiggles', 'tuna', 13);

  // act
  let result = eatsAt(cat);

  // assert
  expect(result).toEqual("1PM");
});
//
test("eatsAt when given 25 returns invalid", () => {
  // arrange
  let cat = newCat('Wiggles', 'tuna', 25);

  // act
  let result = eatsAt(cat);

  // assert
  expect(result).toEqual("invalid");
});
