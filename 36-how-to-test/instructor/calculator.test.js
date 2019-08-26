const {add, sub} = require('./calculator');

test("add when given 1 and 2 returns 3", () => {
  // arrange
  let x = 1;
  let y = 2;

  // act
  let actualSum = add(x, y);

  // assert
  expect(actualSum).toEqual(3);
});

test("sub when given 3 and 2 returns 1", () => {
  // arrange
  let x = 3;
  let y = 2;

  // act
  let actualDiff = sub(x, y);

  // assert
  expect(actualDiff).toEqual(1);
});

test("sub when given 2 and 4 returns -2", () => {
  // arrange
  let x = 2;
  let y = 4;

  // act
  let actualDiff = sub(x, y);

  // assert
  expect(actualDiff).toEqual(-2);
})
