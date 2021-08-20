jQuery(document).on('submit','#formlg',function(event){ event.preventDefault();

    jQuery.ajax({
        URL:'main_app/login.php',
        type: 'POST',
        dataType: 'json',
        data: $(this).serialize(),
        beforeSend: function(){
            $('.botonlg').val('confirmando...');

        }
    })
    .done(function(respuesta) {
        console.log(respues);
        if(!respuesta.error){
            if(respuesta.tipo == 'Admin'){
                location.href = 'main_app/Admin';

            }
            else if(respuesta.tipo == 'usuario'){
                location.href = 'main_app/usuario/';

            }
            else{
                $('.error').slideDown('slow');
                setTimeout(function(){
                    $('.error').slideUp('slow');
                },4000);
                $('.botonlg').val('iniciar sesion');
            }

        }
    })
    .fail(function(resp) {
        console.log(resp.responseText);
    })
    .always(function() {
        console.log("complete");
    });



});
