$(document).ready(function(){
			
			$("#validationCustom02").mask("(00) 0000-00009")
			
			$("#validationCustom02").blur(function(event){
				if ($(this).val().length == 15){
					$("#validationCustom02").mask("(00) 00000-0009")
				}else{
					$("#validationCustom02").mask("(00) 0000-00009")
				}
			})
		})