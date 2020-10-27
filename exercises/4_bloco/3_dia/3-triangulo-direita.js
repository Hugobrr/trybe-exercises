let n =8;
let linha = "";
let nlinha=n;

for(let i=0;i<n;i+=1){
    linha = "";
    for(let i=0;i<n;i+=1){
        (nlinha>i)? linha +=" ":linha +="*";
    }
    console.log(linha);
    nlinha-=1;
}