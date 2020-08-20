let iterador = {
  currentValue = 1,
  next(){
    let result = { value: null, done: false};

    if (this.currentValue > 0 && this.currentValue <= 5) {
      result = { value: this.currentValue, done: false};
      this.currentValue += 1;
    } else {
      result= { done: true};
    }
    return result;
  }
};

let item = iterador.next();

while (!item.done{
  console.log(item.value);
  item= iterador.next();
})


// Funcion Generadora
function* counter() {
  for (var i = 1; i <= 5; i++) {
    yield i;
  }
}

let generator = counter();

function* retornador(){
  return 3;

  yield 5;
}

let g = retornador);
console.log(g.next());;


// Delegar generadores
function* counter() {
  for (var i = 1; i <= 5; i++) {
    yield i;
  }
}

let generator = counter();

function* retornador(){
  yield* counter();
  console.log('Regrese');
}

let g = retornador();
console.log(g.next());
