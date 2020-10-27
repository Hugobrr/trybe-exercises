let x =5;
let linha = "";
let n=x*2;
let nlinha=0;

for(let i=0;i<=x;i+=1){
    linha = "";
    for(let i=0;i<=n;i+=1){
        if((x-nlinha)==i||i==(x+nlinha)||nlinha==(x)){
            linha +="*"
        }
        else{
            linha +=" ";}
    }
    console.log(linha);
    nlinha+=1;
}