let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorencia: "Sim",
  };

  info.recorencia="Sim";

  function propiedades(info) {
      for(let key in info){
          console.log(` ${info[key]} e ${info2[key]}`);
      }


  }
  propiedades(info);