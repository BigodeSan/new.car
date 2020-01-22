$(function(){ 
    $(".navbar-nav li a").click(function() {
       if ( !$(this).parent().hasClass('dropdown') ) {
       $(".navbar-collapse").collapse('hide');
     }
   });  
});