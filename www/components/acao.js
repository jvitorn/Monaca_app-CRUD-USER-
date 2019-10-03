// This is a JavaScript file
$(document).on("click","#enviar",function(){
  var parametros = {
    "nome" :$("#nome").val(),
    "senha" :$("#senha").val(),
    "email":$("#email").val()
  };

  $.ajax({
      type:"post",
      //url
      data:parametros,
      sucess:function(data){
        navigator.notification.alert(data);
      }
  })
});
