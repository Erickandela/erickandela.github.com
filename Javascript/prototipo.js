function User() {
}
User.prototype.saludar = function () {
  console.log("Hola");
}

function Admin() {

}
Admin.prototype = new User();

let erick = new Admin();

erick.saludar();
