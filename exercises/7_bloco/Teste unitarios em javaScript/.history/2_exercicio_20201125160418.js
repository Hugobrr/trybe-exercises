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
// const expected_2 = myRemove (0, 0);
// const expected_3 = myRemove (4, "5");
assert.equal(expected_1, [1, 2, 4] , "Deve-se retornar o arry da forma correta");
// assert.equal(expected_2, 0 , "zero mais zero deve ser igual a zero");
// assert.fail(myRemove (4, "5"));

// implemente seus testes aqui