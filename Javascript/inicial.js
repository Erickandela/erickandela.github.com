
// Tomando como entrada un número entero, imprimir si es par o impar.

// let numero = prompt ("Ingrese un numero");
// if (numero % 2 == 0) {
//   alert("Es numero par")
// } else {
//   alert("Es numero impar")
// }


// Recibir dos números usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos

let num1 = parseInt(prompt("Ingrese el primer numero")) ;
let num2 = parseInt(prompt("Ingrese el segundo numero"));
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


// Imprimir la sucesión fibonacci el número de veces que indicó el usuario

let numero = parseInt(prompt("número: "));
let fi = 1;
let fi1 = 1;
let fi2 = 1;
let cont = 2;
let f = "1, 1";
while(cont < numero){
  fi = fi2;
  fi2 = fi1 + fi2;
  fi1 = fi;
  f = f + ", " + fi2;
  cont = cont + 1;
}
if(numero == 1) f = "1";
console.log(numero + " : " + f);
