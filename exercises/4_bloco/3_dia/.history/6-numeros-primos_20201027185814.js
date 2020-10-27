let n=233;
let raiz=n**(1/2);
let listaPrimos=[1,2];
let nãoprimos=[];
let multiplos=[];
for(let numero=0;numero<raiz;numero++){
    for(let multiplicador=0; multiplicador<raiz;multiplicador++){
        multiplos.push(multiplicador*listaPrimos[numero])
    }
    nãoprimos.sort();
    multiplos.sort();
    for(let i)
}