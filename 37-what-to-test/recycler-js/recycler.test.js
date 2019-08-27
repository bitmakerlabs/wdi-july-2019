const {
  getRandomJunk,
  isCompostable,
  isRecyclable,
  compost,
  recycle,
  toss,
  sortJunk,
  getMaterial,
  emptyMaterial
} = require('./recycler');

beforeEach(() => {
  emptyMaterial();
})

test('getRandomJunk returns a string', () => {
  let junk = getRandomJunk();
  expect(typeof junk).toBe('string');
});

test('isCompostable returns true when given Moldy Bread', () => {
  // arrange
  let item = 'Moldy Bread';

  // act
  let result = isCompostable(item);

  // assert
  expect(result).toBeTruthy();
});

test('isCompostable returns false when given Soda Can', () => {
  // arrange
  let item = 'Soda Can';

  // act
  let result = isCompostable(item);

  // assert
  expect(result).toBeFalsy();
});

test('isCompostable returns false when given an integer', () => {
  // arrange
  let item = 2;

  // act
  let result = isCompostable(item);

  // assert
  expect(result).toBeFalsy();
});

test('isRecyclable returns true when given Soda Bottle', () => {
  // arrange
  let item = 'Soda Bottle';

  // act
  let result = isRecyclable(item);

  // assert
  expect(result).toBeTruthy();
})

test('isRecyclable returns true when given Soda Can', () => {
  // arrange
  let item = 'Soda Can';

  // act
  let result = isRecyclable(item);

  // assert
  expect(result).toBeTruthy();
})

test('isRecyclable returns true when given Jar', () => {
  // arrange
  let item = 'Jar';

  // act
  let result = isRecyclable(item);

  // assert
  expect(result).toBeTruthy();
})

test('isRecyclable returns true when given Newspaper', () => {
  // arrange
  let item = 'Newspaper';

  // act
  let result = isRecyclable(item);

  // assert
  expect(result).toBeTruthy();
})

test('isRecyclable returns false when given Moldy Bread', () => {
  // arrange
  let item = 'Moldy Bread';

  // act
  let result = isRecyclable(item);

  // assert
  expect(result).toBeFalsy();
})

test('isRecyclable returns false when given Coffee Cup', () => {
  // arrange
  let item = 'Coffee Cup';

  // act
  let result = isRecyclable(item);

  // assert
  expect(result).toBeFalsy();
})

test('toss returns true when given an item array', () => {
  // arrange
  let items = ['Old Shoes', 'Coffee Cup'];

  // act
  let result = toss(items);

  // assert
  expect(result).toBeTruthy();
});

test('toss returns false when given no arguments', () => {
  // act
  let result = toss();

  // assert
  expect(result).toBeFalsy();
});

test('toss updates material.garbage with the number or items given', () => {
  // arrange
  let items = ['Old Shoes', 'Coffee Cup'];

  // act
  toss(items)
  let material = getMaterial();

  // assert
  expect(material.garbage).toEqual(items.length);
});

test('sort increments material.garbage by number of garbage items', () => {
  // arrange
  let items = ['Old Shoes', 'Coffee Cup', 'Soda Can'];

  // act
  sortJunk(items)
  let material = getMaterial();

  // assert
  expect(material.garbage).toEqual(2);
  expect(material.metal).toEqual(1);
})
