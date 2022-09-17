let bravoArray = ["100","200","300","400","500","600","700"]
//                  0     1     2     3     4     5     6 

bravoArray.splice(2,1)
//Elimina el item 2 que corresponde al 300
console.log(bravoArray)
// [ '100', '200', '400', '500', '600', '700' ]
//     0      1      2      3      4      5 

bravoArray.splice(3,1)
// Se modifican los indices y se borra el item 3 que ahora correponde al 500

console.log( bravoArray)


