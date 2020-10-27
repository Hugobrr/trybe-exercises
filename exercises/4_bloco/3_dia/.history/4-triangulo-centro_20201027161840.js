let x =3;
let linha = "";
let n=x*3
let nlinha=n;

for(let i=0;i<=x;i+=1){
    linha = "";
    for(let i=0;i<n;i+=1){
        (nlinha>n)? linha +=" ":linha +="*";
    }
    console.log(linha);
    nlinha-=1;
}