const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const expected_1 = myRemove ([1, 2, 3, 4], 3);
const array_exemplo = [1, 2, 3, 4] ;
const expected_2 = myRemove (array_exemplo, 3);
const expected_3 = myRemove ([1, 2, 3, 4], 5);
assert.deepStrictEqual(expected_1, [ 1, 2, 4 ] , "Deve-se retornar o arry da forma correta");
assert.notDeepStrictEqual(expected_1, [1, 2, 3, 4] , "O arry não deve ser igual ao arry de entrada ");
assert.deepStrictEqual(expected_2, [ 1, 2, 4 ] , "Deve-se retornar o arry da forma correta");
assert.deepStrictEqual(array_exemplo,[1, 2, 3, 4],"Se o array de entrada não foi modificado ."  );
assert.deepStrictEqual(expected_3, [ 1, 2, 3, 4] , "Retorna o array como entrou se o valor inserido não está no escopo");