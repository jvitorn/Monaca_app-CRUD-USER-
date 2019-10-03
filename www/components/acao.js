// This is a JavaScript file
$(document).on("click","#enviar",function(){
  var parametros = {
    "nome" :$("#name").val(),
    "senha" :$("#password").val(),
    "email": $("#email").val()
  };

  $.ajax({
      //como sera enviado
      type:"post",
       //url onde sera enviado
      url:"https://jvitorn.000webhostapp.com/connect.php",
      //o que sera enviado
      data:parametros,
      //Sucess
      success:function(data){
        navigator.notification.alert(data);
        //apagando valores
        $("#name").val("");
        $("#password").val("");
        $("#email").val("");

      },
      //Error
      error:function(data){
        navigator.notification.alert("Erro ao cadastrar");
      }
  })
});
