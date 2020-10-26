let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar=0;
for(let i=1; i<numbers.length; i++){
    if(1==(numbers[i])%2){
        impar+=1;
    }
}
console.log(impar);