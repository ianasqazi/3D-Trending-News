$(document).ready(function(){

    $('#filter').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'|| keycode == '10'){
        event.preventDefault();
         // callAPI();
        callGuardian();
        }
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
        // callAPI();
        // callGuardian();
    });
});

function callGuardian(){
    $("#comment").remove();
        $(".main").empty();
        $(".main").append("<div id=aFrameBox>aFrame Box goes here</div>");
        $("#aFrameBox").addClass("container-fluid text-center");
    
        var query=$.trim($("#filter").val());

        var queryGuardian = "https://content.guardianapis.com/search?q="+query+"&api-key=a0f5a380-0a1a-427b-9d99-14fa9b5750c4&order-by=newest&page-size=200";

        //call the Guardian Api 
        $.ajax({
                    url: queryNEWSapi,
                    method: "GET"
                    }).then(function(response) {
                        $(".main").append("<div class=row id=apiblock></div>");
                        $("#apiblock").addClass("container-fluid");
                            
                        //summary sub-block
                        $("#apiblock").append("<div class=col text id=api1Summary><span>Guardian General Summary</span></div>");
                        $("#api1Summary").append("<p id=periodGuardian>Period: </p>");
                        $("#periodGuardian").text("Period : " +response.result[0])

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

    

}
// function callAPI(){
//     $("#comment").remove();
//     $(".main").empty();
//     $(".main").append("<div id=aFrameBox>aFrame Box goes here</div>");
//     $("#aFrameBox").addClass("container-fluid text-center");


//     // calling NEWS API 
//     var query = $.trim($("#filter").val());

//     var queryNEWSapi="https://newsapi.org/v2/top-headlines?q="+query+"&apiKey=ed9bdb8084cb45b3bc6a7ead43be2e8d";
//     $.ajax({
//         url: queryNEWSapi,
//         method: "GET"
//         }).then(function(response) {
//             $(".main").append("<div class=row id=apiblock></div>");
//             $("#apiblock").addClass("container-fluid");
                
//             //summary sub-block
//             $("#apiblock").append("<div class=col text id=api1Summary><span>API 1 General Summary</span></div>");
//             $("#api1Summary").append("<p>Period: </p>");
//             $("#api1Summary").append("<p>Found: </p>");
//             $("#api1Summary").append("<p>Most Engaged: </p>");
//             $("#api1Summary").append("<p>Most Engaged Platform: </p>");

//             //Highest Engagement sub-block
//             $("#apiblock").append("<div class=col text id=api1Highest><span>API 1 Highest Engagement Summary</span></div>");
//             $("#api1Highest").append("<p>Lorem Ipsum Sample Text</p>");

//             //Highest Engagement sub-block
//             $("#apiblock").append("<div class=col text id=api1Threshold><span>Other Threshold Links</span></div>");
//             $("#api1Threshold").append("<ul id=topLinks></ul>");
//             $("#topLinks").append("<li id=a1L1>Link1</li>");
//             $("#topLinks").append("<li id=a2L2>Link2</li>");
//             $("#topLinks").append("<li id=a3L4>Link3</li>");
              
//         });
    
//     ;

// }
