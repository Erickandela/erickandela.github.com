// primitivo
let nombre = "Erick";
console.log(nombre.length);

// Objeto
let name = new String("Erick");


// Escaping
"\"

console.log("Erick \"Hola\" ");

// Concatenacion

let a = "hola";
let b= "mundo";

console.log(a.concat(b));


// Template literals => Template strings
let nombre = "Uriel";
let template = `Hola ${nombre},`;
console.log(template);



let mes= "12";
console.log(mes.padStart(2, "0"));
console.log(mes.padEnd(2, "0"));


// <, >, <=, >=, ==
// Local compare
console.log("A".localCompare("z"));


let prueba = "hola";
let prueba2 = prueba.toUpperCase();
console.log(prueba);
console.log(prueba2);


// subcadenas y caracteres

console.log("Hola"[0]);

let cadena = "Hola";

for (const caracter of cadena) {
  console.log(caracter);
}

let cadena = "Hola Mundo";
console.log(cadena.substring(0,4));;


// Busqueda
let cadena = "Hola Erick";
console.log(cadena.indexOf("Erick"));

if (cadena.includes("Erick")) console.log("Encontrado");

let link = "http://google.com";
if (link.startsWith("https")) console.log("Es seguro");


let texto = "curso de javascript en codigo facilito;

let palabras = texto.split(" ");
console.log(palabras.join(","));

// Filto de palabras
function filtrodeMarcas(str) {
  let marcas = ["CodigoFacilito"];
  let palabrasFiltradas = str.split(" ").map(
    palabra => {
      return marcas.includes(palabra) ? "XXX" : palabra
    }
  );
  return palabrasFiltradas.join(" ");
}

console.log(filtrodeMarcas(texto));


// trim
console.log("    Hola      ".trim());
console.log("hola".length);
console.log("hola".repeat(3));
console.log("Hola mundo".replace("mundo", "codi"));

// unicode
function toCodePoint(char) {
  var hex = char.charCodeAt(0).toString(16);
  return "\\u" + "0000".substring(0,4 - hex.length) + hex;
}
