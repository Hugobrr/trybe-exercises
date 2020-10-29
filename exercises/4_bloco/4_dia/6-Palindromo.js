  function palindromo(string) {
      let tamanho=string.length;
      for(let index=0; index<tamanho; index += 1){
        let ultimas = tamanho-index-1;
        console.log(`${string.charAt(index)} =?= ${string.charAt(ultimas)} `);
        if(string.charAt(index)!=string.charAt(ultimas)){
            return false;
        }
      }
      return true;
  }
  console.log(palindromo("arara"));