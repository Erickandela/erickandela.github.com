let simbolo = Symbol('mi-simbolo');

let obj= {};

obj[simbolo] = function () {
  console.log('Soy un simbolo');
}

obj[simbolo]();
