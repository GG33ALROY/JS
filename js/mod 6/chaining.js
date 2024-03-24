const transaction =[1000,3000,4000,2000,-839,3800,-4500];

let pos = transaction.filter(function(n){
    return n>0
}).reduce(function(acc,value){
    sum= value+acc
    return sum
},0)
console.log(pos)