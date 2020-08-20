(async function () {

  let resultado = await new Promise ((resolve, reject)=>{
    setTimeout (resolve,400,5)
  });
  let resultado2 = await new Promise ((resolve, reject)=>{
    setTimeout (resolve,400,10)
  });

  console.log(resultado + resultado2);

})();
