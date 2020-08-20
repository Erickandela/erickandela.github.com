// Caracteres literales y especiales (meta caracteres)
//  Tipo Caracter, aserciones, agrupamientos/rangos, cuantificadores, unicode property escapes
/hola/
/.@./


// Busqueda

let texto = "Hola, me llamo erick"

console.log(texto.search(/erick/));

// digito
console.log(texto.search(/\d/));


// instancias digitos
console.log(texto.match(/\d/g));  //["2", "7"]
console.log(texto.match(/\d+/g));  // ["27"]


//iterador
let it = texto.matchAll(/\d/g);
for (instancia of it){
  console.log(instancia);
}


// Reemplazo de patrones

let texto = "Hola, me llamo erick";

let nuevotexto = teto.replace(/hola/g, "Hello");  //Reemplazo de todas las instancias de hola
console.log(nuevotexto);


let texto = "1000 numeros disponibles";
let nuevotexto = texto.replaceAll(/(\d)(\d{3})/g, "$1,$2")
console.log(nuevotexto);


// Rangos en RegEx
console.log("abcd".match(/[abcd]/));
console.log("abcd".match(/abcd/));
console.log("b".match(/[abcd]/));
console.log("b".match(/[a-d]/));
console.log("b".match(/abcd/));
console.log("3".match(/0-5/));


\d es igual al rango [0-9]
\w es igual a lrango [a-ZA-Z0-9_]



// Agrupamiento en expresiones regulares
// recordar parte de un patron por separado
// aplicar cuantificadores a un Agrupamiento

console.log("texto@dominio".match/()\S+)@\S+/));

console.log("texto@dominio".match(/(?<username>\S+)@\S+/));



// Ejercicio
let texto = "Visita a https://google.com"
console.log(texto.repalce(/(https?:\/\/(\S+\.)?\S+(\.\S+)(\.\S+)?)\,"<a href='$1'>$1</a>"));
