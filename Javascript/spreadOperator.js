let numeros = [3, 5,6];

function sumar(n1, n2, n3) {
  return n1 + n2 + n3;
}

let resultado = sumar.apply(this, numeros);
console.log(resultado);


let objeto = {
  clave: 3
}

let objeto2 = {
  clave: 4
}

let newObject = {
  ...objeto,
  ...objeto2
}
console.log(newObject);
