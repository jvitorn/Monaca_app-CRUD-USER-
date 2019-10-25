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
        $("#name").val(nome);  
        $("#email").val(email);
        $("#password").val(senha); 
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
       
      },
      //Error
      error:function(data){
        navigator.notification.alert("Erro ao cadastrar");
      }
  })
}
$(document).on('click','.editar',function(){
  $("#name").attr('readonly',false);
  $("#email").attr('readonly',false);
  console.log('entrou');
  $("#password").attr('readonly',false);
});
$(document).on('click','.salvar',function(){
  let codigo = $("#lista option:selected").val();
  let nome = $("#name").val();
  let senha = $("#password").val();
  let email = $("#email").val();
   let parametros = {
    "codigo" :codigo,
    "nome":nome,
    "email":email,
    "senha" : senha
  };
   $.ajax({
      //como sera enviado
      type:"post",
       //url onde sera enviado
      url:"https://jvitorn.000webhostapp.com/alterar.php",
      //o que sera enviado
      data:parametros,
      //Sucess
      success:function(data){
        Swal.fire({
          type: 'success',
          title: data,
           confirmButtonText:'OK',
          timer: 1500
        }).then((result) => {
            if (result.value) {
              location.reload();
            }
        });
        

      },
      //Error
      error:function(data){
         Swal.fire({
          type: 'error',
          title: 'Erro ao excluir',
          showConfirmButton: false,
          timer: 1500
        })
        
      }
  })
});
$(document).on('click','.excluir',function(){
  let codigo = $("#lista option:selected").val();
   let parametros = {
    "codigo" :codigo
  };
   $.ajax({
      //como sera enviado
      type:"post",
       //url onde sera enviado
      url:"https://jvitorn.000webhostapp.com/delete.php",
      //o que sera enviado
      data:parametros,
      //Sucess
      success:function(data){
        Swal.fire({
          type: 'success',
          title: data,
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
            if (result.value) {
              location.reload();
            }
        });
        

      },
      //Error
      error:function(data){
         Swal.fire({
          type: 'error',
          title: 'Erro ao excluir',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
            if (result.value) {
              location.reload();
            }
        });
        
      }
  })
});
$(document).on('click','.cancelar',function(){
  $("#name").attr('readonly',true);
  $("#email").attr('readonly',true);
  $("#password").attr('readonly',true);
});