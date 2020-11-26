const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual( myFizzBuzz(15), "fizzbuzz", "divisivel por 3 e 5 deve dar fizzbuzz" );
assert.strictEqual( myFizzBuzz(9), "fizz" , "o valor divisivel deve retornar 9");
assert.strictEqual( myFizzBuzz(25), "buzz" , );
assert.strictEqual( myFizzBuzz(4), 4 );
assert.strictEqual( myFizzBuzz("não numero"), false );