let cerrar = document.querySelectorAll(".close");

cerrar.forEach(function(link) {
  link.addEventListener("click", function (ev) {
    ev.preventDefault();
    let content = document.querySelector('.content');

    content.classList.remove("animate_fadeInDown");
    content.classList.remove("animate_animated");

    content.classList.add("animate_fadeOutUp");
    content.classList.add("animate_animated");

    setTimeout(function () {
    location.href = "/boletines";
  }, 1000);
    return false;
  });
});
