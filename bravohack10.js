let bravoArray = ["100","200","300","400","500","600","700"]
//                  0     1     2     3     4     5     6 
console.log(bravoArray)

bravoArray.splice(5,0,"qux","thud")
// Se agrega alias qux y thud luego de 500


console.log(bravoArray)
//Se muestra el resultado del nuevo Array 