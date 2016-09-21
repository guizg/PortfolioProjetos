document.addEventListener("DOMContentLoaded", function() {

  var sobre = document.querySelector(".sobremim");

  sobre.addEventListener("click", function(){
    var classesTitulo = sobre.classList;
    if(classesTitulo.contains("ativado")){
      classesTitulo.remove("ativado");
    }else{
      classesTitulo.add("ativado");
    }
  });

  var foto = document.querySelector(".foto");

  foto.addEventListener("click", function(){
    var classesTitulo = sobre.classList;
    if(classesTitulo.contains("ativado")){
      classesTitulo.remove("ativado");
    }else{
      classesTitulo.add("ativado");
    }
  });

  var fundo = document.querySelector(".car")

  fundo.addEventListener("click", function(){
    var classesTitulo = sobre.classList;
    if(classesTitulo.contains("ativado")){
      classesTitulo.remove("ativado");
    }
  });

  var proj = document.querySelector(".projeto")

  proj.addEventListener("click", function(){
    var classesTitulo = sobre.classList;
    if(classesTitulo.contains("ativado")){
      classesTitulo.remove("ativado");
    }
  });


});
