var textShow = true;

$("#header").click(function(){
    if(textShow){
        $("#resume").fadeOut( function(){
            textShow = false;
        });
    } else{
        $("#resume").fadeIn( function(){
            textShow = true;
        }); 
    }
});
