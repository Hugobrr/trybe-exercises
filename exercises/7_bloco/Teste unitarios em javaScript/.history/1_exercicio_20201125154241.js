const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
const expected_1 = sum (4, 5);
const expected_2 = sum (0, 0);
// const expected_3 = sum (4, "5");
assert.equal(expected_1, 9 , "quatro mais cinco deve ser igual a nove");
assert.equal(expected_2, 0 , "zero mais zero deve ser igual a zero");
// assert.equal(expected_3, 'parameters must be numbers' , "Caso a aentrada não seja um numero deve retornar error");
