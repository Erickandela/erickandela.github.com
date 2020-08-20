const request = require('request');

function leer(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}

leer('https://google.com')
.then(function (response) {
  console.log(response);
})
.catch(function (err) {
  console.log(err);
});
