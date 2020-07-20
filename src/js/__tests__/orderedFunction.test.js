import orderByProps from '../orderedFunction';

test('should return an array of object properties in sorted order', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = ['name', 'level'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});

test('should return an array of object properties and values in alphabetical order', () => {
  const obj = {
    health: 10,
    attack: 80,
    defence: 40,
    a: 'a',
    b: 'b',
  };
  const order = [];
  const result = [
    { key: 'a', value: 'a' },
    { key: 'attack', value: 80 },
    { key: 'b', value: 'b' },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});

test('should return an array of object properties and values in alphabetical order', () => {
  const obj = { health: 10, attack: 80, defence: 40 };
  const order = ['test', 'test2'];
  const result = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
});

test('should return an empty array', () => {
  const obj = {};
  const order = [];
  const result = [];
  expect(orderByProps(obj, order)).toEqual(result);
});
