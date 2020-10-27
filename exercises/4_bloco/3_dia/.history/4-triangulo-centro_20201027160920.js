let x =3;
let linha = "";
let n=
let nlinha=n;
let

for(let i=0;i<n*2;i+=1){
    linha = "";
    for(let i=0;i<n*2;i+=1){
        (nlinha>i)? linha +=" ":linha +="*";
    }
    console.log(linha);
    nlinha-=1;
}