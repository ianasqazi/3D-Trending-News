$(document).ready(function(){

    $('#searchIcon').keypress(function(event){
        if (event.keyCode == 10 || event.keyCode == 13) 
            event.preventDefault();

            // callNewsApi();

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
        callGuardian();
        // callNewsApi();

    });
});

function callGuardian(){
    $("#comment").remove();
        $(".main").empty();
        $(".main").append("<div id=aFrameBox>aFrame Box goes here</div>");
        $("#aFrameBox").addClass("container-fluid text-center");

        var fromDate = moment().subtract(6, "days").format("YYYY-MM-DD");
        var query=$.trim($("#filter").val());

        var queryGuardian = "https://content.guardianapis.com/search?q="+query+"&api-key=a0f5a380-0a1a-427b-9d99-14fa9b5750c4&order-by=newest&page-size=200&from-date="+ fromDate;
        
        // var guardianDayCounter=[0,0,0,0,0,0,0]; // Today, Today-1, Today-3, ... Today-7

        //call the Guardian Api 
        $.ajax({
                    url: queryGuardian,
                    method: "GET"
                    }).then(function(response) {

                        var arrResults=response.response.results;
                        
                        $(".main").append("<div class=row id=guardianApiBlock></div>");
                        $("#guardianApiBlock").addClass("container-fluid");
                            
                        //summary sub-block
                        $("#guardianApiBlock").append("<div class=col-3 id=apiSummary><h5>Guardian General Summary</h5></div>");
                        $("#apiSummary").append("<hr>");

                        $("#apiSummary").append("<p id=datePeriod></p>");

                        $("#datePeriod").text("Date Range : " + moment(arrResults[0].webPublicationDate).format("YYYY-MM-DD") + " to " +moment(arrResults[arrResults.length-1].webPublicationDate).format("YYYY-MM-DD"));
                        $("#apiSummary").append("<p id=noOfArticles>Found: no of articles </p>");
                        $("#noOfArticles").text("Found "+ response.response.total + " number of articles");

                        var guardianDayCounter=[0,0,0,0,0,0,0]; // Today, Today-1, Today-3, ... Today-7
                        
                            for(i=0;i<arrResults.length;i++){
                                    // Today counter 
                                    if(moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
                                        guardianDayCounter[0]+= 1;}
                                    // Today -1 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(1, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[1]+= 1;}
                                    // Today -2 counter
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(2, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[2]+= 1;}
                                    // Today -3 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(3, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[3]+= 1;}
                                    // Today -4 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(4, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[4]+= 1;}
                                    // Today -5 counter 
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(5, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[5]+= 1;}
                                    // Today -6 counter 
                                    else {
                                        guardianDayCounter[6]+= 1;}
                            };
                            // console.log("Guardian Day Counter : "+guardianDayCounter);   
                        
                        // Day Division sub-block
                        $("#guardianApiBlock").append("<div class=col-3 id=apiDaysCounter><h5>Guardian Per Day Post Summary</span></h5>");
                        $("#apiDaysCounter").append("<hr>");

                        for (i=1; i<=7 ;i++){
                            $("#apiDaysCounter").append("<p id=dateCount"+i+"></p>");    
                        }

                        $("#dateCount1").text(moment().format("YYYY-MM-DD") + " : " + guardianDayCounter[0]);
                        $("#dateCount2").text(moment().subtract(1, "days").format("YYYY-MM-DD") + " : " + guardianDayCounter[1]);
                        $("#dateCount3").text(moment().subtract(2, "days").format("YYYY-MM-DD") + " : " + guardianDayCounter[2]);
                        $("#dateCount4").text(moment().subtract(3, "days").format("YYYY-MM-DD") + " : " + guardianDayCounter[3]);
                        $("#dateCount5").text(moment().subtract(4, "days").format("YYYY-MM-DD") + " : " + guardianDayCounter[4]);
                        $("#dateCount6").text(moment().subtract(5, "days").format("YYYY-MM-DD") + " : " + guardianDayCounter[5]);
                        $("#dateCount7").text(moment().subtract(6, "days").format("YYYY-MM-DD") + " : " + guardianDayCounter[6]);

                        // Preview Link sub-block

                        $("#guardianApiBlock").append("<div class=col-5 id=guardianApiLinks><H5>Links from Guardian API</H5></div>");
                        $("#guardianApiLinks").append("<hr>");
                        for (i=1; i<=5 ;i++){
                            $("#guardianApiLinks").append("<div><p id=guardianApiTitle"+i+"></p><a id=guardianApiURL"+i+" target=_blank> URL </a></div>");
                        }

                        $("#guardianApiTitle1").text(arrResults[0].webTitle);
                        $("#guardianApiURL1").attr("href",arrResults[0].webUrl);

                        $("#guardianApiTitle2").text(arrResults[1].webTitle);
                        $("#guardianApiURL2").attr("href",arrResults[1].webUrl);

                        $("#guardianApiTitle3").text(arrResults[2].webTitle);
                        $("#guardianApiURL3").attr("href",arrResults[2].webUrl);

                        $("#guardianApiTitle4").text(arrResults[3].webTitle);
                        $("#guardianApiURL4").attr("href",arrResults[3].webUrl);

                        $("#guardianApiTitle5").text(arrResults[4].webTitle);
                        $("#guardianApiURL5").attr("href",arrResults[4].webUrl);

                    });

}


function callNewsApi(){
    $("#comment").remove();
    $(".main").empty();
    $(".main").append("<div id=aFrameBox>aFrame Box goes here</div>");
    $("#aFrameBox").addClass("container-fluid text-center");

    var query=$.trim($("#filter").val());

    var queryNewsApi="https://newsapi.org/v2/top-headlines?apiKey=ed9bdb8084cb45b3bc6a7ead43be2e8d&page-size=100&q=" + query;

    $.ajax({
        url: queryNewsApi,
        method: "GET"
        }).then(function(response) {
            $(".main").append("<div class=row id=newsApiBlock></div>");
            $("#newsApiBlock").addClass("container-fluid");
                            
                //summary sub-block 
                $("#newsApiBlock").append("<div class=col-8 id=newsApiLinks><H5>Links from News API</H5></div>");
                $("#newsApiLinks").append("<hr>");
                    for (i=1; (i<=3 || i<response.totalResults) ;i++){
                        $("#newsApiLinks").append("<p id=newsApiTitle"+i+"></p>");
                        $("#newsApiLinks").append("<a id=newsApiURL"+i+"></a>");
                        $("#newsApiLinks").append("<hr>");

                    }

                    $("#newsApiTitle1").text(response.articles[0].title);
                    $("#newsApiURL1").text(response.articles[0].url);
                    $("#newsApiURL1").attr("href","response.articles[0].url");
                    
                    $("#newsApiTitle2").text(response.articles[1].title);
                    $("#newsApiURL2").text(response.articles[1].url);
                    $("#newsApiURL2").attr("href","response.articles[1].url");

                    $("#newsApiTitle3").text(response.articles[2].title);
                    $("#newsApiURL3").text(response.articles[2].url);
                    $("#newsApiURL3").attr("href","response.articles[2].url");
                    

                $("#newsApiBlock").append("<div class=col-3 id=newsApiSummary><h5>Summary from News API</h5></div>");
                $("#newsApiSummary").append("<hr>");

                $("#newsApiSummary").append("<p id=newsApiDateRange> Date Range is </p>");
                    
                    $("#newsApiDateRange").text("Date Range : " + moment(response.articles[0].publishedAt).format("YYYY-MM-DD") + " to " +moment(response.articles[response.articles.length-1].publishedAt).format("YYYY-MM-DD"));

                    $("#newsApiSummary").append("<p id=noOfArticlesAPI>No of Articles</p>");
                    console.log(response.totalResults);
                    $("#noOfArticlesAPI").text("Found "+ response.totalResults + " number of articles"); 
        });

}
