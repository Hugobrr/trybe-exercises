let lista = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maior(teste) {
      let posicao =0;
      for(let index=0; index<teste.length; index += 1){
            if(teste[posicao].length<teste[index].length){
                posicao = index;
            }
    }
      return teste[posicao];
  }
  console.log(maior(lista));