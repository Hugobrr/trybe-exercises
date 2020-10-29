let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };


  info.recorencia="Sim";
  function propiedades(info) {
      for(let key in info){
          console.log(key);
      }

      
  }
  propiedades(info);