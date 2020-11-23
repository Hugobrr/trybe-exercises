const  testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(false);
//                     0  1  2   3  4  5
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
console.log(`Os números `${oddsAndEvens[5]}  `,`${oddsAndEvens[1]}  `,`${oddsAndEvens[2]}  `,`${oddsAndEvens[4]}  `,`${oddsAndEvens[3]}  `,`${oddsAndEvens[0]}  ` se encontram ordenados de forma crescente!`)
console.log(oddsAndEvens);