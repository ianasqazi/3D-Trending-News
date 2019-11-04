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
    $(".main").append("<div id=aFrameBox>aFrame Box goes here</div>");


    // calling NEWS API 
    var queryNEWSapi="https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=ed9bdb8084cb45b3bc6a7ead43be2e8d";
    $.ajax({
        url: queryNEWSapi,
        method: "GET"
        }).then(function(response) {
            $(".main").append("<div id=api1>API1 details go here</div>");
            $("#api1").append("<p>Response</p>");
            $("#api1").text(JSON.stringify(response));
            
        });
    
    ;

}
