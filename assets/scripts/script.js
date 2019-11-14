// Declaring Global Variables 

var guardianDayCounter=[0,0,0,0,0,0,0]; 
var newsApiDayCounter=[0,0,0,0,0,0,0]; 
var civicFeedDayCounter=[0,0,0,0,0,0,0]; 




$(document).ready(function(){

    $(".card-body").hide();
    $("#teamMembers").hide();
    $(".card").hide();
    $(".row").hide();
    $("#home").hide();

      
      $('#searchIcon').on( "mouseenter", function(){
         $(this).addClass('fa-arrow-right') ,
         $(this).removeClass('fa-search') 
       } );
       $('#searchIcon').on( "mouseleave", function(){
        $(this).removeClass('fa-arrow-right') ,
        $(this).addClass('fa-search') 
      } );

      $("#home").click(function(){
        apiContainer();
        clearUI();
        callGuardian();
        callNewsApi();
        $(".main").show();
        $("#apiblock").show();
        $("#api1Threshold").show();
        $("#topLinks").show();
        $("#topLinks").show();
        $("#topLinks").show();
        $("#filter").show();
        $("#filtersubmit").show();
        $(".row").hide();
        $("#home").hide();
        $("#about").show();
        $(".card").hide();
        $(".card-body").hide();
        $("#teamMembers").hide();

    });
    $("#filtersubmit").click(function(){
        apiContainer();
        clearUI();
        // callGuardian();
        callNewsApi();
        // callCivicFeedApi();
    });
});

function aboutTheTeam(){
    $(".main").hide();
    $("#apiblock").hide();
    $("#api1Threshold").hide();
    $("#topLinks").hide();
    $("#topLinks").hide();
    $("#topLinks").hide();
    $("#filter").hide();
    $("#filtersubmit").hide();
    $(".row").show();
    $("#home").show();
    $("#about").hide();
    $(".card-body").show();
    $(".card").show();
    $("#teamMembers").show();
    
};

// ↓ centralizes all APIs in a single DIV, thus keeping the order of things -Rus
function apiContainer() {
    $(".main").append("<div id=apiContainer></div>");
    $("#apiContainer").addClass("container-fluid");
    $("#apiContainer").append("<br>");


    $("#apiContainer").append("<button type=button id=aframeCreateBtn onclick=aFrameBox()>Graph</button>");
    $("#aframeCreateBtn").addClass("btn btn-success");

}

// ↓ clears all data when making a new search. Please add new API blocks here.  -Rus
function clearUI(){
    $("#comment").remove();
    $("#aFrameBox").remove();
    $("#guardianApiBlock").remove();
    $("#newsApiBlock").remove();
    $("#civicFeedBlock").remove();
}

// ↓ API calls

function callGuardian(){

        var fromDate = moment().subtract(6, "days").format("YYYY-MM-DD");
        var query=$.trim($("#filter").val());
        var queryGuardian = "https://content.guardianapis.com/search?q="+query+"&api-key=a0f5a380-0a1a-427b-9d99-14fa9b5750c4&order-by=newest&page-size=200&from-date="+ fromDate;
        
        //call the Guardian Search API 
        $.ajax({
                    url: queryGuardian,
                    method: "GET"
                    }).then(function(response) {

                        var arrResults=response.response.results; // Results array
                        
                        // API Main block
                        $("#apiContainer").append("<div class=row id=guardianApiBlock></div>");
                        $("#guardianApiBlock").addClass("container-fluid");
                            
                        //summary sub-block
                        $("#guardianApiBlock").append("<div class=col-3 id=apiSummary><h5>Guardian General Summary</h5></div>");
                        $("#apiSummary").append("<hr>");
                        $("#apiSummary").append("<p id=datePeriod></p>");
                        $("#datePeriod").text("Date Range : " + moment(arrResults[0].webPublicationDate).format("YYYY-MM-DD") + " to " +moment(arrResults[arrResults.length-1].webPublicationDate).format("YYYY-MM-DD"));
                        $("#apiSummary").append("<p id=noOfArticles></p>");
                        $("#noOfArticles").text("Found "+ response.response.total + " number of articles");
                        
                        // Day Division sub-block
                            for(i=0;i<arrResults.length;i++){
                                    if(moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
                                        guardianDayCounter[0]+= 1;}
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(1, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[1]+= 1;}
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(2, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[2]+= 1;}
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(3, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[3]+= 1;}
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(4, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[4]+= 1;}
                                    else if (moment(arrResults[i].webPublicationDate).format("YYYY-MM-DD")==moment().subtract(5, "days").format("YYYY-MM-DD")){
                                        guardianDayCounter[5]+= 1;}
                                    else {
                                        guardianDayCounter[6]+= 1;}
                            };

                            // Check if the array returns zero responses
                        checkDayCounter(guardianDayCounter);


                        $("#guardianApiBlock").append("<div class=col-3 id=apiDaysCounter><h5>Guardian Per Day Post Summary</h5></div>");
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

                        $("#guardianApiBlock").append("<div class=col id=guardianApiLinks><H5>Links from Guardian API</H5></div>");
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

    var query=$.trim($("#filter").val());
    var fromDate = moment().subtract(6, "days").format("YYYY-MM-DD");

    var queryNewsApi="https://newsapi.org/v2/everything?apiKey=ed9bdb8084cb45b3bc6a7ead43be2e8d&pagesize=100&sortby=popularity&language=en&from="+ fromDate + "&q=" + query;

    //calling News API 
    $.ajax({
        url: queryNewsApi,
        method: "GET"
        }).then(function(response) {
            $("#apiContainer").append("<div class=row id=newsApiBlock></div>");
            $("#newsApiBlock").addClass("container-fluid");
                            
                //summary sub-block 

                $("#newsApiBlock").append("<div class=col-3 id=newsApiSummary><h5>Summary from News API</h5></div>");
                $("#newsApiSummary").append("<hr>");
                $("#newsApiSummary").append("<p id=newsApiDateRange></p>");
                $("#newsApiDateRange").text("Date Range : " + moment(response.articles[0].publishedAt).format("YYYY-MM-DD") + " to " +moment(response.articles[response.articles.length-1].publishedAt).format("YYYY-MM-DD"));
                $("#newsApiSummary").append("<p id=noOfArticlesAPI></p>");
                $("#noOfArticlesAPI").text("Found "+ response.totalResults + " number of articles"); 

                // Day Division sub-block

                //  newsApiDayCounter=[0,0,0,0,0,0,0]; // Today, Today-1, Today-3, ... Today-7
                for(i=0;i<response.articles.length;i++){
                        if(moment(response.articles[i].publishedAt).format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
                            newsApiDayCounter[0]+= 1;}
                        else if (moment(response.articles[i].publishedAt).format("YYYY-MM-DD")==moment().subtract(1, "days").format("YYYY-MM-DD")){
                            newsApiDayCounter[1]+= 1;}
                        else if (moment(response.articles[i].publishedAt).format("YYYY-MM-DD")==moment().subtract(2, "days").format("YYYY-MM-DD")){
                            newsApiDayCounter[2]+= 1;}
                        else if (moment(response.articles[i].publishedAt).format("YYYY-MM-DD")==moment().subtract(3, "days").format("YYYY-MM-DD")){
                            newsApiDayCounter[3]+= 1;}
                        else if (moment(response.articles[i].publishedAt).format("YYYY-MM-DD")==moment().subtract(4, "days").format("YYYY-MM-DD")){
                            newsApiDayCounter[4]+= 1;}
                        else if (moment(response.articles[i].publishedAt).format("YYYY-MM-DD")==moment().subtract(5, "days").format("YYYY-MM-DD")){
                            newsApiDayCounter[5]+= 1;}
                        else {
                            newsApiDayCounter[6]+= 1;}
                };               

                // Check if the array returns zero responses
                checkDayCounter(newsApiDayCounter);

                $("#newsApiBlock").append("<div class=col-3 id=newsApiDaysCounter><h5>News API Per Day Post Summary</h5></div>");
                        $("#newsApiDaysCounter").append("<hr>");

                        for (i=1; i<=7 ;i++){
                            $("#newsApiDaysCounter").append("<p id=newsApiDateCount"+i+"></p>");    
                        }

                        $("#newsApiDateCount1").text(moment().format("YYYY-MM-DD") + " : " + newsApiDayCounter[0]);
                        $("#newsApiDateCount2").text(moment().subtract(1, "days").format("YYYY-MM-DD") + " : " + newsApiDayCounter[1]);
                        $("#newsApiDateCount3").text(moment().subtract(2, "days").format("YYYY-MM-DD") + " : " + newsApiDayCounter[2]);
                        $("#newsApiDateCount4").text(moment().subtract(3, "days").format("YYYY-MM-DD") + " : " + newsApiDayCounter[3]);
                        $("#newsApiDateCount5").text(moment().subtract(4, "days").format("YYYY-MM-DD") + " : " + newsApiDayCounter[4]);
                        $("#newsApiDateCount6").text(moment().subtract(5, "days").format("YYYY-MM-DD") + " : " + newsApiDayCounter[5]);
                        $("#newsApiDateCount7").text(moment().subtract(6, "days").format("YYYY-MM-DD") + " : " + newsApiDayCounter[6]);


                // Preview Links sub-block
                $("#newsApiBlock").append("<div class=col id=newsApiLinks><H5>Links from News API</H5></div>");
                $("#newsApiLinks").append("<hr>");
                    for (i=1; i<=5;i++){
                        $("#newsApiLinks").append("<div><p id=newsApiTitle"+i+"></p><a id=newsApiURL"+i+" target=_blank> URL </a></div>");
                    }

                    $("#newsApiTitle1").text(response.articles[0].title);
                    $("#newsApiURL1").attr("href",response.articles[0].url);
                    $("#newsApiTitle2").text(response.articles[1].title);
                    $("#newsApiURL2").attr("href",response.articles[1].url);
                    $("#newsApiTitle3").text(response.articles[2].title);
                    $("#newsApiURL3").attr("href",response.articles[2].url);
                    $("#newsApiTitle4").text(response.articles[3].title);
                    $("#newsApiURL4").attr("href",response.articles[3].url);
                    $("#newsApiTitle5").text(response.articles[4].title);
                    $("#newsApiURL5").attr("href",response.articles[4].url); 

        });

}

function callCivicFeedApi(){

    var query=$.trim($("#filter").val());
    var fromDate = moment().subtract(6, "days").format("YYYY-MM-DD");

    var queryCivicFeedApi = "https://api-beta.civicfeed.com/news/search?q="+ query + "&results=30&from-date=" + fromDate;
    
    //calling Civic Feed API
    $.ajax({
        url: queryCivicFeedApi,
        method: "GET",
        headers: {
            "X-API-KEY": "mX8JVJCIBc9iJYmc3MLQOARBnSFR48x8fCYDkKz0",
        }
        }).then(function(response) {
            $("#apiContainer").append("<div class=row id=civicFeedBlock></div>");
            $("#civicFeedBlock").addClass("container-fluid");
                            
                //summary sub-block 

                $("#civicFeedBlock").append("<div class=col-3 id=civicFeedApiSummary><h5>Summary from Civic Feed API</h5></div>");
                $("#civicFeedApiSummary").append("<hr>");
                $("#civicFeedApiSummary").append("<p id=civicFeedDateRange></p>");
                $("#civicFeedDateRange").text("Date Range : " + moment(response.articles[0].created).format("YYYY-MM-DD") + " to " +moment(response.articles[response.articles.length-1].created).format("YYYY-MM-DD"));
                $("#civicFeedApiSummary").append("<p id=noOfArticlesAPI></p>");
                $("#noOfArticlesAPI").text("Found "+ response.results + " number of articles"); 

                // Day Division sub-block

                for(i=0;i<response.articles.length;i++){
                        if(moment(response.articles[i].created).format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
                            civicFeedDayCounter[0]+= 1;}
                        else if (moment(response.articles[i].created).format("YYYY-MM-DD")==moment().subtract(1, "days").format("YYYY-MM-DD")){
                            civicFeedDayCounter[1]+= 1;}
                        else if (moment(response.articles[i].created).format("YYYY-MM-DD")==moment().subtract(2, "days").format("YYYY-MM-DD")){
                            civicFeedDayCounter[2]+= 1;}
                        else if (moment(response.articles[i].created).format("YYYY-MM-DD")==moment().subtract(3, "days").format("YYYY-MM-DD")){
                            civicFeedDayCounter[3]+= 1;}
                        else if (moment(response.articles[i].created).format("YYYY-MM-DD")==moment().subtract(4, "days").format("YYYY-MM-DD")){
                            civicFeedDayCounter[4]+= 1;}
                        else if (moment(response.articles[i].created).format("YYYY-MM-DD")==moment().subtract(5, "days").format("YYYY-MM-DD")){
                            civicFeedDayCounter[5]+= 1;}
                        else {
                            civicFeedDayCounter[6]+= 1;}
                };

                // Check if the array returns zero responses
                checkDayCounter(civicFeedDayCounter);


                $("#civicFeedBlock").append("<div class=col-3 id=civicFeedDaysCounter><h5>Civic Feed API Per Day Post Summary</h5></div>");
                        $("#civicFeedDaysCounter").append("<hr>");

                        for (i=1; i<=7 ;i++){
                            $("#civicFeedDaysCounter").append("<p id=civicFeedDateCount"+i+"></p>");    
                        }

                        $("#civicFeedDateCount1").text(moment().format("YYYY-MM-DD") + " : " + civicFeedDayCounter[0]);
                        $("#civicFeedDateCount2").text(moment().subtract(1, "days").format("YYYY-MM-DD") + " : " + civicFeedDayCounter[1]);
                        $("#civicFeedDateCount3").text(moment().subtract(2, "days").format("YYYY-MM-DD") + " : " + civicFeedDayCounter[2]);
                        $("#civicFeedDateCount4").text(moment().subtract(3, "days").format("YYYY-MM-DD") + " : " + civicFeedDayCounter[3]);
                        $("#civicFeedDateCount5").text(moment().subtract(4, "days").format("YYYY-MM-DD") + " : " + civicFeedDayCounter[4]);
                        $("#civicFeedDateCount6").text(moment().subtract(5, "days").format("YYYY-MM-DD") + " : " + civicFeedDayCounter[5]);
                        $("#civicFeedDateCount7").text(moment().subtract(6, "days").format("YYYY-MM-DD") + " : " + civicFeedDayCounter[6]);


                // Preview Links sub-block
                $("#civicFeedBlock").append("<div class=col id=civicFeedLinks><H5>Links from Civic Feed API</H5></div>");
                $("#civicFeedLinks").append("<hr>");
                    for (i=1; i<=5;i++){
                        $("#civicFeedLinks").append("<div><p id=civicFeedTitle"+i+"></p><a id=civicFeedURL"+i+" target=_blank> URL </a></div>");
                    }

                    $("#civicFeedTitle1").text(response.articles[0].title);
                    $("#civicFeedURL1").attr("href",response.articles[0].url);
                    $("#civicFeedTitle2").text(response.articles[1].title);
                    $("#civicFeedURL2").attr("href",response.articles[1].url);
                    $("#civicFeedTitle3").text(response.articles[2].title);
                    $("#civicFeedURL3").attr("href",response.articles[2].url);
                    $("#civicFeedTitle4").text(response.articles[3].title);
                    $("#civicFeedURL4").attr("href",response.articles[3].url);
                    $("#civicFeedTitle5").text(response.articles[4].title);
                    $("#civicFeedURL5").attr("href",response.articles[4].url);
                    
        });

}

// ↓ Function to check if API returns zero
function checkDayCounter(arr) {
    if(arr[0] == 0) {
        if(arr[1] == 0) {
            if(arr[2] == 0) {
                if(arr[3] == 0) {
                    if(arr[4] == 0) {
                        if(arr[5] == 0) {
                            if(arr[6] == 0) {
             return swal("API Response is Null");}}}}}}}
 }


function aFrameBox(){
    $(".main").prepend("<div id=aFrameBox></div>");
    $("#aFrameBox").addClass("container-fluid text-center");
    $("#aFrameBox").css({"height": "500px", "padding":"20px"});
    aFrameSceneBuilder();
    compileNews();

}

// ↓ base setup of aFrame environment

function aFrameSceneBuilder() {

     $("#aFrameBox").append("<a-scene id=aFrameScene></<a-scene>");
     $("#aFrameScene").attr({"embedded": "", "vr-mode-ui": "enabled: false", "inspector": "true", "keyboard-shortcuts":"", "screenshot":""});

     $("#aFrameScene").append("<a-entity camera id=aFrameCamera></a-entity>")
     $("#aFrameCamera").attr({"camera": "active: true", "fov": "80", "wasd-controls-enabled": "false", "look-controls-enabled": "false", "position": "x:0, y:2, z:0", "look-at-position": "0 -1 0", "rotation": "-30 0 0"});

    $('#aFrameScene').append("<a-entity id=aFrameWorld></a-entity>");
    $('#aFrameWorld').attr({"position": "0 0 -1"});

    $("#aFrameWorld").append("<a-sky></a-sky>");
    $('a-sky').attr({"opacity": "0.20", "color": "a8a8fa"});

    $("#aFrameWorld").append("<a-circle></a-circle>");
    $('a-circle').attr(({"opacity": "0.750", "color": "#ff00ff", "position": "", "src": "#platform", "radius": "4.5", "rotation": "-90 0 0", "segments": "64"}))

}

// ↓ transforming API data into objects

function compileNews(){

        var position = [newsApiDayCounter[0]*0.1, newsApiDayCounter[1]*0.1, newsApiDayCounter[2]*0.1, newsApiDayCounter[3]*0.1, newsApiDayCounter[4]*0.1, newsApiDayCounter[5]*0.1, newsApiDayCounter[6]*0.1];

        // var position = [0.5, 0.7, 0.3, 0.6, 2.5, 3.2, 1.3];
        
    $("#aFrameWorld").append("<a-entity id=newsApiContainer></a-entity>");
    $("#newsApiContainer").attr({"position":"0 0 -2.5"})
    $("#newsApiContainer").append("<a-box id=newsDay0></a-box>",
                                    "<a-box id=newsDay1></a-box>",
                                    "<a-box id=newsDay2></a-box>",
                                    "<a-box id=newsDay3></a-box>",
                                    "<a-box id=newsDay4></a-box>",
                                    "<a-box id=newsDay5></a-box>",
                                    "<a-box id=newsDay6></a-box>");

    $("#newsDay0","#newsDay1","#newsDay2","#newsDay3","#newsDay4","#newsDay5","#newsDay6",).attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": ""})
    $("#newsDay0").attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": "", "height": position[0], "position":"-1.5 0 0", "color":"#ff0044"});
    $("#newsDay1").attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": "", "height": position[1], "position":"-1 0 0", "color":"#00ff00"});
    $("#newsDay2").attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": "", "height": position[2], "position":"-0.5 0 0", "color":"#ff0000"});
    $("#newsDay3").attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": "", "height": position[3], "position":"0 0 0", "color":"#0000ff"});
    $("#newsDay4").attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": "", "height": position[4], "position":"0.5 0 0", "color":"#00ff88"});
    $("#newsDay5").attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": "", "height": position[5], "position":"1 0 0", "color":"#FF0088"});
    $("#newsDay6").attr({"width":"0.5", "depth":"0.5","rotation":"0 0 0", "material":"", "geometry": "", "height": position[6], "position":"1.5 0 0", "color":"#0088FF"});


};


    

    // function compileGuardian(){
    //     var position = [guardianDayCounter.index[0]*0.1,
    //                     guardianDayCounter.index[1]*0.1,
    //                     guardianDayCounter.index[2]*0.1,
    //                     guardianDayCounter.index[3]*0.1,
    //                     guardianDayCounter.index[4]*0.1,
    //                     guardianDayCounter.index[5]*0.1,
    //                     guardianDayCounter.index[6]*0.1,
    //                     guardianDayCounter.index[7]*0.1]

    //     // function(){
    //     // for (i=guardianDayCounter.index[0]; i > guardianDayCounter.length+1; i++)
    //     //     {
    //     //         var 
    //     //     }    
    //     // }

    // };

    // function compileCivic(){

    // };

    // function compileReddit(){

    // }

    // function compileTwitter(){

    // };


// notes block
// cubes should have base hight
// cubes should have API based color
// add <a-text value="API NAME" geometry="primitive:plane"></a-text> +position attr next to cubes.


