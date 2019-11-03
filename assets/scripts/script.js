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
    var query = $.trim($("#filter").val());

    var queryNEWSapi="https://newsapi.org/v2/top-headlines?q="+query+"&apiKey=ed9bdb8084cb45b3bc6a7ead43be2e8d";
    $.ajax({
        url: queryNEWSapi,
        method: "GET"
        }).then(function(response) {

            for (i=1;i<3;i++){
                $(".main").append("<div id=api"+i+"block>API"+i+" details go here</div>");
                $("#api"+i).addClass("row text-center");

            }

            
        });
    
    ;

}
