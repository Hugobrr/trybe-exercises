let lista = [2, 3, 2, 5, 8, 2,3 ,3 ,5 ,5 ,5  ,5 ,5 ,8 ];
function maior(teste) {
      let posicao = 0;
      let quantidadeRepeticao = 0;
      for(let index=0; index<teste.length; index += 1){
        let tamanho =0;
        for(let peca=index; peca<teste.length; peca+=1){
            if(teste[index]==teste[peca]){
                tamanho += 1;
            }
        }
        if(tamanho>quantidadeRepeticao){
            posicao=index;
            quantidadeRepeticao=tamanho;
        }
    }
      return teste[posicao];
  }
  console.log(maior(lista));