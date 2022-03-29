let sumador=0;
let cantidadEstudiantes = Number(prompt('Ingrese la cantidad de estudiante'));
let cantidadNotas = Number(prompt('Ingrese la cantidad de notas por estudiante'));
let datosNombre= [];
let datosNotas=[];
for(let j=0;j<cantidadEstudiantes;j++){
let nombre = prompt('Ingrese el nombre del alumno');
alert('En el caso de querer dejar de cargar notas escriba "ESC"');

for(let i=0;i<cantidadNotas;i++){
    let algo =prompt('Ingrese la nota que se encuentra en la posicion numero '+(i+1)+' del alumno: '+nombre);
    if(algo=='ESC'){
        break;
    }
    datosNotas.push(algo);
    sumador = sumador + Number(algo);
}
console.log('AfueraSumador', sumador);
console.log('AfueraCantidad', cantidadNotas);
let notaFinal= sumador/cantidadNotas;
//datosNombre.push([nombre,datosNotas]);
datosNombre.push([nombre,notaFinal]);
//console.log('AfueraNotaFinal', notaFinal);
//alert(`La nota final del alumno: ${nombre} es: ${notaFinal}`);
sumador =0;
datosNotas=[];
}

for(let i=0;i<cantidadEstudiantes;i++){
    for(let j=0;j<cantidadNotas;j++){
   
        console.log(datosNombre[i][j]);
      
    }



}