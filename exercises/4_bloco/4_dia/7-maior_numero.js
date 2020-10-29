let lista = [2, 3, 6, 4 ,7, 45 ,10, 1 ,45];
function maior(teste) {
      let posicao =0;
      for(let index=0; index<teste.length; index += 1){
            if(teste[posicao]<teste[index]){
                posicao = index;
        }
      }
      return posicao;
  }
  console.log(maior(lista));