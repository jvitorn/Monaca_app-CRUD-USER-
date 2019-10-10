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
        window.location.href = 'listar.html';
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
$(document).ready(function(){
    listar();
    
});
$(document).on('change','#lista',function(){
      let nome = $("#lista option:selected").attr('nome');
      let email = $("#lista option:selected").attr('email');
      let senha = $("#lista option:selected").attr('senha');
      console.log(nome,email,senha);
        $("#name").val(nome);  
        $("#email").val(email);
        $("#password").val(senha); 
     });
     $('.editar').click(function(){
       $("#name").attr('readyonly',false);
       $("#email").attr('readyonly',false);
       $("#password").attr('readyonly',false);
     });
function listar(){
  $.ajax({
      //como sera enviado
      type:"post",
       //url onde sera enviado
      url:"https://jvitorn.000webhostapp.com/listar.php",
      //o que sera enviado
      dataType:"json",
      //Sucess
      success:function(data){
      let itemlista = "";
       $.each(data.pessoas,function(i,dados){
          itemlista += "<option value='"+dados.codigo+"' nome='"+dados.nome+"' email='"+dados.email+"' senha='"+dados.senha+"'>"+dados.nome+"</option>";
       });
       $("#lista").html(itemlista);
       console.log(itemlista);
      },
      //Error
      error:function(data){
        navigator.notification.alert("Erro ao cadastrar");
      }
  })
}

