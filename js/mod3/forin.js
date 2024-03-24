var colorsArray = ['yellow','blue','green','orange']

for (var color in colorsArray){
    console.log(colorsArray[color])
}



var colors = {
    primary:'RED',
    secondary:'BLUE',
    tertiary:'YELLOW',
}

for(var color in colors){
    console.log(color + '='+colors[color])
}