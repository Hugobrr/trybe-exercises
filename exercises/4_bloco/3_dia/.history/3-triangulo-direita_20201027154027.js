let n =8;
let linha = "";
let nlinha=0

for(let i=0;i<n;i+=1){
    for(let i=0;i<n;i+=1){
        (nlinha<=i)? linha +=" ";linha +="*";
    }
    console.log(linha);
    
}