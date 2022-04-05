// primer parte

let numero = Number(prompt('ingrese un numero'));
if(numero>1000){
alert('el numero que ingreso es mayor a mil');
}


let cadena = prompt('ingrese un palabra o frase');
if(cadena=='Hola'){
    console.log('Ingreso Hola, Bienvenido');
}


let ent=Number(prompt('ingrese un numero'));
if(ent>10 && ent<50){
alert('El numero que ingreso se encuentre entre el 10 y el 50');
}

// segunda Parte

let num1=Number(prompt('ingrese un numero'));
let num2=Number(prompt('ingrese un numero, sera el exponente del anterior'));
let resultado = 1;
if(num2!=0 && num1!=0){
for(let i=0;i<num2;i++){
resultado = resultado * num1;
}
}else if(num2==0 && num1!=0){
resultado = 1;
}else {resultado = 'no se puede calcular';}
alert('El resultado de la operacion es ' + resultado);



let salida = '';
while(salida!='ESC'){
    salida= prompt('ingrse un valor, en caso de querer salir escriba ESC');
    if(salida=='ESC'){
        alert('hasta pronto');
        break;
    }
    alert(salida + ' texto extra');
}


let num = Number(prompt('ingrese un numero'));
for(let i=0;i<num;i++){
    alert('hola');
}