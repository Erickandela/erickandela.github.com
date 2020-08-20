// const request = require('request');
//
// request('https://google.com', function () {
//   console.log('Petición de Google correcta');
// });
//
// console.log('Mensaje despues de la petición');


const rp = require('request-promise');

// fullfiled
// rejected
// pending
// setled

rp('http://google.com')
.then(function (html) {
  console.log('Termine la petici+on de Google.');
}).catch(function (err) {
  console.log(err);
})
