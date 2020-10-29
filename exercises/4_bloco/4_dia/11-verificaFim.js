let lista = 5;
function verificaFimPalavra(stringWord, stringEnding) {
      for(let index=(stringWord.length-1);index>=(stringWord.length-stringEnding.length); index -= 1){
        if(stringWord[index] != stringEnding[index-(stringWord.length-stringEnding.length)]){
            return false;
        }
    }
      return true;
  }
  console.log(verificaFimPalavra("trybe","be"));