$(document).ready(function(){

    $('#searchCity').keypress(function(event){
        if (event.keyCode == 10 || event.keyCode == 13) 
            event.preventDefault();
            callAPI();
      });

    $("#filtersubmit").click(function(){
        callAPI();
    });
});

function callAPI(){
    $("#comment").remove();
    $("#main").append("<div id=aFrameBox></div>")
}
