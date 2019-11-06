$(document).ready(function(){

    $('#filter').keypress(function(event){
        if (event.keyCode == 10 || event.keyCode == 13) 
            event.preventDefault();
            callAPI();
      });

      $('#searchIcon').on( "mouseenter", function(){
         $(this).addClass('fa-arrow-right') ,
         $(this).removeClass('fa-search') 
       } );
       $('#searchIcon').on( "mouseleave", function(){
        $(this).removeClass('fa-arrow-right') ,
        $(this).addClass('fa-search') 
      } );

    $("#filtersubmit").click(function(){
        callAPI();
    });
});

function callAPI(){
    $("#comment").remove();
    $(".main").empty();
    $(".main").append("<div id=aFrameBox>aFrame Box goes here</div>");
    $("#aFrameBox").addClass("container-fluid text-center");


    // calling NEWS API 
    var query = $.trim($("#filter").val());

    var queryNEWSapi="https://newsapi.org/v2/top-headlines?q="+query+"&apiKey=ed9bdb8084cb45b3bc6a7ead43be2e8d";
    $.ajax({
        url: queryNEWSapi,
        method: "GET"
        }).then(function(response) {
            $(".main").append("<div class=row id=apiblock></div>");
            $("#apiblock").addClass("container-fluid");
                
            //summary sub-block
            $("#apiblock").append("<div class=col text id=api1Summary><span>API 1 General Summary</span></div>");
            $("#api1Summary").append("<p>Period: </p>");
            $("#api1Summary").append("<p>Found: </p>");
            $("#api1Summary").append("<p>Most Engaged: </p>");
            $("#api1Summary").append("<p>Most Engaged Platform: </p>");

            //Highest Engagement sub-block
            $("#apiblock").append("<div class=col text id=api1Highest><span>API 1 Highest Engagement Summary</span></div>");
            $("#api1Highest").append("<p>Lorem Ipsum Sample Text</p>");

            //Highest Engagement sub-block
            $("#apiblock").append("<div class=col text id=api1Threshold><span>Other Threshold Links</span></div>");
            $("#api1Threshold").append("<ul id=topLinks></ul>");
            $("#topLinks").append("<li id=a1L1>Link1</li>");
            $("#topLinks").append("<li id=a2L2>Link2</li>");
            $("#topLinks").append("<li id=a3L4>Link3</li>");
              
        });
    
    ;

}
