$(document).ready(function(){

    $('#searchIcon').keypress(function(event){
        if (event.keyCode == 10 || event.keyCode == 13) 
            event.preventDefault();
            // callAPI();
            callGuardian();

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
        callGuardian();
    });
});

function callGuardian(){
    $("#comment").remove();
        $(".main").empty();
        $(".main").append("<div id=aFrameBox>aFrame Box goes here</div>");
        $("#aFrameBox").addClass("container-fluid text-center");

        // var currentTime=(moment().format("YYYY-MM-DD"));
        // console.log(currentTime);
        
        var fromDate = moment().subtract(6, "days").format("YYYY-MM-DD");
        // console.log("FromDate : " +fromDate);

        var query=$.trim($("#filter").val());

        var queryGuardian = "https://content.guardianapis.com/search?q="+query+"&api-key=a0f5a380-0a1a-427b-9d99-14fa9b5750c4&order-by=newest&page-size=200&from-date="+ fromDate;

        //call the Guardian Api 
        $.ajax({
                    url: queryGuardian,
                    method: "GET"
                    }).then(function(response) {

                        var arrResults=response.response.results;
                        
                        $(".main").append("<div class=row id=apiblock></div>");
                        $("#apiblock").addClass("container-fluid");
                            
                        //summary sub-block
                        $("#apiblock").append("<div class=col id=apiSummary><span>Guardian General Summary</span></div>");
                        $("#apiSummary").append("<p id=datePeriod></p>");

                        $("#datePeriod").text("Date Range : " + moment(arrResults[0].webPublicationDate).format("YYYY-MM-DD") + " to " +moment(arrResults[arrResults.length-1].webPublicationDate).format("YYYY-MM-DD"));
                        $("#apiSummary").append("<p id=noOfArticles>Found: no of articles </p>");
                        $("#noOfArticles").text("Found "+ response.response.total + " number of articles");
                        // console.log(arrResults[0].webPublicationDate);
                        // console.log(arrResults);
                        // console.log(response);
                        

                        // console.log(moment(arrResults[0].webPublicationDate).format("YYYY-MM-DD"));
                        

                        


                            const dayCounter=[0,0,0,0,0,0,0]; // Today, Today-1, Today-3, ... Today-7
                                for(i=0;i<=arrResults.length;i++){
                                    
                                    // Today counter 
                                    if(moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
                                        dayCounter[0]+= 1;
                                    }
                                    // Today -1 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(1, "days").format("YYYY-MM-DD")){
                                        dayCounter[1]+= 1;
                                    }
                                    // Today -2 counter
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(2, "days").format("YYYY-MM-DD")){
                                        dayCounter[2]+= 1;
                                    }
                                    // Today -3 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(3, "days").format("YYYY-MM-DD")){
                                        dayCounter[3]+= 1;
                                    }
                                    // Today -4 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(4, "days").format("YYYY-MM-DD")){
                                        dayCounter[4]+= 1;
                                    }
                                    // Today -5 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(5, "days").format("YYYY-MM-DD")){
                                        dayCounter[5]+= 1;
                                    }
                                    // Today -6 counter 
                                    else {
                                        dayCounter[6]+= 1;
                                    }
                                    console.log(dayCounter);

                                };

                      

                            // var dayCounter=[0,0,0,0,0,0,0]; // Today, Today-1, Today-3, ... Today-7
                            // console.log(dayCounter);
                            //     for(i=0;i<=arrResults.length;i++){
                                    
                            //         // Today counter 
                            //         if(moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
                            //             dayCounter[0]+= 1;
                            //             return dayCounter[0];
                            //         }
                            //         // Today -1 counter 
                            //         else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(1, "days").format("YYYY-MM-DD")){
                            //             dayCounter[1]+= 1;
                            //         }
                            //         // Today -2 counter
                            //         else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(2, "days").format("YYYY-MM-DD")){
                            //             dayCounter[2]+= 1;
                            //         }
                            //         // Today -3 counter 
                            //         else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(3, "days").format("YYYY-MM-DD")){
                            //             dayCounter[3]+= 1;
                            //         }
                            //         // Today -4 counter 
                            //         else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(4, "days").format("YYYY-MM-DD")){
                            //             dayCounter[4]+= 1;
                            //         }
                            //         // Today -5 counter 
                            //         else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(5, "days").format("YYYY-MM-DD")){
                            //             dayCounter[5]+= 1;
                            //         }
                            //         // Today -6 counter 
                            //         else {
                            //             dayCounter[6]+= 1;
                            //         }
                            //         // console.log(dayCounter);
                            //     };



                        // Highest Engagement sub-block
                        // $("#apiblock").append("<div class=col id=apiDaysCounter><span>Guardian Per Day Post Summary</span></div>");
                        // $("#apiDaysCounter").append("<p id=Today> Today</p>");
                        // // $("#array").text("Today : " +dayCounter[0]);
                        // $("#array").text("Today : " +x);
                        // for(i=1; i<=7; i++){
                        //     $("#apiDaysCounter").append("<p ></p>").text(dayCounter[0]);

                        // }



                        //Links to latest articles
                        $("#apiblock").append("<div class=col id=api1Threshold><span>Other Threshold Links</span></div>");
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

