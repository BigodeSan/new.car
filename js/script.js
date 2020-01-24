$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
			url: "https://simple-form.com/claudomiromonteiro@gmail.com?json",
			method: "POST",
			data: {
				nome: $("#validationCustom01").val(),
				email: $("#inputGroupPrepend").val(),
				telefone: $("#validationCustom02").val(),
				mensagem: $("#exampleFormControlTextarea1").val()
	    },
	    dataType: "json",
            
		}).done(function(){
					
			$("#send").html("<div class='alert alert-success'>");
			$("#send > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append("</button>");
			$("#send > .alert-success").append($("<strong>").text("Email enviado com sucesso. Responderemos o mais breve possível."));
			$("#send > .alert-success").append('</div>');

			$('#form').trigger("reset");
			
		}).fail(function(){
			
			$("#send").html("<div class='alert alert-danger'>");
			$("#send > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
			.append("</button>");
			$("#send > .alert-danger").append($("<strong>").text("Desculpe, não foi possivel enviar seu email. Tente mais tarde!"));
			$("#send > .alert-danger").append('</div>');
            
            $('#form').trigger("reset");
			
		});
	});

}) ;
