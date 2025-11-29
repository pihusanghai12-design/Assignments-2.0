function sumALL(){
    var sum=0;
    for(i=0; i<arguments.length; i++){
       sum+=arguments[i];
        }
    }
    return sum;
    
console.log(sumALL(23,45,87,93,0));