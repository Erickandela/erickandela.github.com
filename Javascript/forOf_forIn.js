// For of 
function saludar() {
  for(nombre of arguments){
    console.log('Hola '+ nombre);
  }
}

saludar('Erick', 'Josue', 'Mundo');


// For in

let usuario = {
  nombre: 'Erick',
  edad: 24
}
for (propiedad in usuario){
  console.log(propiedad);
}
