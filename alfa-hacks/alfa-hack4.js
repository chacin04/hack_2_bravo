//se crea una variable para eliminar dos elementos de un array
let eliminarElementos = [100,200,300,400,500,600,700];
//creamos un splice(), permite eliminar por posicion de elemento
eliminarElementos.splice(2,1);
eliminarElementos.splice(3,1);
console.log(eliminarElementos);