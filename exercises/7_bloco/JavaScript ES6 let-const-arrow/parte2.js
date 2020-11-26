
const fatorial = (numero ) => {
    let retorno = 1;
    for (let indice=numero; indice >0 ; indice --){
        retorno = indice* retorno;
    }
return retorno;
}
console.log(fatorial(4));
let resultado = 1;
const fatorialRecursivo = (numero) => {if(numero >=1){resultado*numero}(numero-1)}

const longest = (frase) => {
    let maior_palavra = 0 ;
    const palavras = frase.split(" ");
    for (let i = 1, len = $elems.length; i < len; ++i){
        if(palavras[i].length > palavras[maior_palavra].length){
            maior_palavra = i;
        }
    }
    return palavras[maior_palavra] ;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'