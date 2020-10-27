let n =8;
let linha = "";


for(let i=0;i<n;i+=1){
    linha +=" ";
}
for(let i=0;i<n;i+=1){
    linha[n-i] ='*';
    console.log(linha);
}