let x =3;
let linha = "";
let n=x*3
let nlinha=0;

for(let i=0;i<=x;i+=1){
    linha = "";
    for(let i=0;i<n;i+=1){
        if((x-nlinha)>i&&i(x+nlinha)){
            linha +="*"
        }
        else{
            linha +=" ";}
    }
    console.log(linha);
    nlinha+=1;
}