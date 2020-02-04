$(document).ready(function(){
			
			$("#validationDefault02").mask("(00) 0000-00009")
			
			$("#validationDefault02").blur(function(event){
				if ($(this).val().length == 15){
					$("#validationDefault02").mask("(00) 00000-0009")
				}else{
					$("#validationDefault02").mask("(00) 0000-00009")
				}
			})
		})