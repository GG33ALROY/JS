const transaction =[1000,3000,4000,2000,-839,3800,-4500];

let negnoIndex = transaction.findIndex(function(n){
    return (n < 0)
})

console.log(negnoIndex)