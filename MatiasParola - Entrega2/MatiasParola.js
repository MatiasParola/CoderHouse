let sumador=0;
let cantidadEstudiantes = Number(prompt('Ingrese la cantidad de estudiante'));
let cantidadNotas = Number(prompt('Ingrese la cantidad de notas por estudiante'));
for(let j=0;j<cantidadEstudiantes;j++){
let nombre = prompt('Ingrese el nombre del alumno');
alert('En el caso de querer dejar de cargar notas escriba "ESC"');
for(let i=0;i<cantidadNotas;i++){
    let algo =prompt('Ingrese la nota que se encuentra en la posicion numero '+(i+1)+' del alumno: '+nombre);
    if(algo=='ESC'){
        break;
    }
    sumador = sumador + Number(algo);
}
console.log('AfueraSumador', sumador);
console.log('AfueraCantidad', cantidadNotas);
let notaFinal= sumador/cantidadNotas;
console.log('AfueraNotaFinal', notaFinal);
alert(`La nota final del alumno: ${nombre} es: ${notaFinal}`);
sumador =0;
}