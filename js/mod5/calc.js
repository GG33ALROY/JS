function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}


module.exports  = {
    a:add,
    subtraction:sub,
    multiplication:mul
}