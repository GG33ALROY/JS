const Iseven = (n)=>{
    return n%2==0
}

let printresult=(evenfn,num)=>{
    const IsnumEven =evenfn(num)
    
    console.log(`the number ${num} is an even number: ${IsnumEven}`) 
}

printresult(Iseven,17)