$(document).ready(function(){
    $("button").on("click",function(){
        var ballDiv = $("div");
        var seconds =$("#time").val()/0.008;
        
        ballDiv.animate({top:"0%",left:"11.625%"},seconds);
        ballDiv.animate({top:"87%",left:"23.25%"},seconds);
        ballDiv.animate({top:"24.5%",left:"34.875%"},seconds);
        ballDiv.animate({top:"87%",left:"46.5%"},seconds);
        ballDiv.animate({top:"46%",left:"58.125%"},seconds);
        ballDiv.animate({top:"87%",left:"69.75%"},seconds);
        ballDiv.animate({top:"73.5%",left:"81.375%"},seconds);
        ballDiv.animate({top:"87%",left:"93%"},seconds);
        ballDiv.animate({top:"87%",left:"0px"}, seconds);

        if(seconds == 0 || seconds < 0){
            alert("Enter a value greater than zero!");
        }
    });
});