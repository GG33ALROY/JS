let myObj = {
    name:'Alroy',
    age:19,
    gender:'M',

    add :{
        city : 'Thane' 
    }
}

let {name :n,add:{city: c} }= myObj
console.log(c)
console.log(n)