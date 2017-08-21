/**
 * Created by TanSidhu on 8/12/2016.
 */
/*ajax api call in javascript*/
/*function loadMovie(){
    var obj = new XMLHttpRequest();
    var first = "http://api.themoviedb.org/3/search/movie?query=";
    var movie =$("#searchInput").val();
    var second ="&api_key=4794f37533e8bc741df05fa568255a56";
    var url = first + movie + second;
    obj.open("GET", url, true);
    obj.send();
    obj.onreadystatechange = function () {
        if (obj.readyState == 4 && obj.status == 200) {
            myFunction(obj.responseText);
        }
    }
    function myFunction(response) {
        var arr = JSON.parse(response);
        console.log(arr);
        var v = arr.results[0].overview;
        $("#demo").html(v);

    }
}*/
/*ajax api call in jquery*/
$(document).ready(function () {
    $("#imgBar ul li a").click(function () {
        var qw = $(this).find("img").prop("alt");
        myMainFunction(qw);
    })
    $("#imgBar ul li").hover(function(){
        $("#imgBar").css({"width":"74%"});
        //$(this).find("img").addClass("demo"); //we can use this as alternative of css hover
        $(this).nextAll().find("img").addClass("shiftNext");
        $(this).prevAll().find("img").addClass("shiftPrev");
    },function () {
        // $(this).find("img").removeClass("demo");//we can use this as alternative of css hover
        $(this).nextAll().find("img").removeClass("shiftNext");
        $(this).prevAll().find("img").removeClass("shiftPrev");
        $("#imgBar").css({"width":"67%","transition":"width 1s"});
    });
    $("#searchBtn").click(function () {
           myMainFunction($("#searchInput").val());
    });
       function myMainFunction(moviesName) { //
           $("#searchInput").val(moviesName);
           var first = "http://api.themoviedb.org/3/search/movie?query=";
           var movie = moviesName;
           var second = "&api_key=4794f37533e8bc741df05fa568255a56";
           $.ajax({
               type: "GET",
               datatype: "jsonp", //or use json jsonp for secure data
               url: first + movie + second,
               success: function (response) {
                   console.log(response);
                   myFunction(response);
               }
           });
           function myFunction(response) {
               var arr = response.results;
              // console.log(arr);
               var overview = arr[0].overview;
               var titleName = arr[0].original_title;
               var posterMovie1 = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
               var posterMovie2 = arr[0].poster_path;

               var arrPrint = [arr[0].vote_average, arr[0].release_date, arr[0].popularity, arr[0].original_language];
               $("#movieName").html("<center>" + titleName + "</center>");
               $("#moviePoster").attr("src",posterMovie1 + posterMovie2);
               $("#movieDetail>p").html(overview);
               $("#movieDetail ul li").each(function (i, index) {
                   $(this).find("span").html(arrPrint[i]);
               })
           }
       }
});