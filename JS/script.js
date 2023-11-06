
//LIBRARY PAGE
$(document).ready(function(){ 

    //displaying everything from 1 to 19
    var moviedata1 = null;

    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/popular?api_key=d0201974ce90691a745764523e00022b&language=en-US&page=1",
        success: function(data){
            //console.log(data);
            moviedata1 = data;
        }
    }).done(function(){

        for (let i = 0; i < 20; i++) {
            $("#poster" + i).attr("src","https://image.tmdb.org/t/p/original/" + moviedata1.results[i].poster_path);
            $("#movietitle" + i).html(moviedata1.results[i].original_title);

//Single Movies//
$(document).ready(function(){ 

    //displaying everything from 1 to 19
    var moviedata1 = null;

    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/popular?api_key=d0201974ce90691a745764523e00022b&language=en-US&page=1",
        success: function(data){
            //console.log(data);
            moviedata1 = data;
        }
    }).done(function(){

        for (let i = 0; i < 20; i++) {
            $("#poster" + i).attr("src","https://image.tmdb.org/t/p/original/" + moviedata1.results[i].poster_path);


            $("#movietitle" + i).html(moviedata1.results[i].original_title); 
            $("#movieoverview" + i).html(moviedata1.results[i].overview);
    
            //singlemovies extra movies code
            $("#sparetitle" + i).html(moviedata1.results[i].original_title);
            $("#sparemovie" + i).attr("src","https://image.tmdb.org/t/p/original/" + moviedata1.results[i].poster_path);

            $("#movieyear" + i).html("Released: " + moviedata1.results[i].release_date);
            $("#movierating" + i).html("Rating: " + Math.round(moviedata1.results[i].vote_average) + "/10");
            $("#movielol" + i).html(moviedata1.results[i].id);

            $.ajax({
                type: "GET",
                url: "https://api.themoviedb.org/3/movie/" + moviedata1.results[i].id + "?api_key=d0201974ce90691a745764523e00022b&language=en-US",
                success: function(data){
                    //console.log(data);
                    movieid = data;
                }
            }).done(function(){
                    $("#moviegenre" + i).html(movieid.genres[0].name);
            });
        
        }
    });

    
//displays all the info on the single movies page
function singleloader(){

    var moviedata3 = null;
    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("movieid") + "?api_key=d0201974ce90691a745764523e00022b&language=en-US",
        success: function(data){
            console.log(data);
            moviedata3 = data;
        }
    }).done(function(){
        $("#movietrailer")
        $("#title").html(moviedata3.original_title);
        $("#year").html("Release date: " + moviedata3.release_date);
        $("#rating").html("Rating: " + Math.round(moviedata3.vote_average * 10)/10);
        $("#genres").html("Genres: " + moviedata3.genres[0].name + " / " + moviedata3.genres[1].name + " / " + moviedata3.genres[2].name);
        $("#desc").html(moviedata3.overview);
    });


    moviedata4 = null;
    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("movieid") + "/credits?api_key=d0201974ce90691a745764523e00022b&language=en-US",
        success: function(data){
            console.log(data);
            moviedata4 = data;
        }
    }).done(function(){
        $("#mc").html(moviedata4.cast[0].name);
        $("#cast1").html(moviedata4.cast[1].name);
        $("#cast2").html(moviedata4.cast[2].name);
        $("#cast3").html(moviedata4.cast[3].name);
    });


    moviedata5 = null;
    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/" + sessionStorage.getItem("movieid") + "/videos?api_key=d0201974ce90691a745764523e00022b&language=en-US",
        success: function(data){
            console.log(data);
            moviedata5 = data;
        }
    }).done(function(){
        $("#movietrailer").attr("src", "https://www.youtube.com/embed/" + moviedata5.results[0].key)
    });

}

//shows the box that has the filters in it
function showfilters(){
    $("#box").toggle();
};


//filters functionality
$("#allmovies").click(function() {
    $("#poster1").parents("div").css("display","block");
    $("#poster2").parents("div").css("display","block");
    $("#poster3").parents("div").css("display","block");
    $("#poster4").parents("div").css("display","block");
    $("#poster5").parents("div").css("display","block");
    $("#poster6").parents("div").css("display","block");
    $("#poster7").parents("div").css("display","block");
    $("#poster8").parents("div").css("display","block");
    $("#poster9").parents("div").css("display","block");
    $("#poster10").parents("div").css("display","block");
    $("#poster11").parents("div").css("display","block");
    $("#poster12").parents("div").css("display","block");
    $("#poster13").parents("div").css("display","block");
    $("#poster14").parents("div").css("display","block");
    $("#poster15").parents("div").css("display","block");
    $("#poster16").parents("div").css("display","block");
    $("#poster17").parents("div").css("display","block");
    $("#poster18").parents("div").css("display","block");
    $("#poster19").parents("div").css("display","block");
    $("#poster20").parents("div").css("display","block");
    $("#poster21").parents("div").css("display","block");
    $("#poster22").parents("div").css("display","block");
    $("#poster23").parents("div").css("display","block");
    $("#poster24").parents("div").css("display","block");
    $("#poster25").parents("div").css("display","block");
});

function filterations() {
    var genres = document.getElementById("genres").value;
    var year = document.getElementById("year").value;
    var rating = document.getElementById("rating").value;
    //console.log(genres,year,rating);

    $("#poster1").parents("div").css("display","none");
    $("#poster2").parents("div").css("display","none");
    $("#poster3").parents("div").css("display","none");
    $("#poster4").parents("div").css("display","none");
    $("#poster5").parents("div").css("display","none");
    $("#poster6").parents("div").css("display","none");
    $("#poster7").parents("div").css("display","none");
    $("#poster8").parents("div").css("display","none");
    $("#poster9").parents("div").css("display","none");
    $("#poster10").parents("div").css("display","none");
    $("#poster11").parents("div").css("display","none");
    $("#poster12").parents("div").css("display","none");
    $("#poster13").parents("div").css("display","none");
    $("#poster14").parents("div").css("display","none");
    $("#poster15").parents("div").css("display","none");
    $("#poster16").parents("div").css("display","none");
    $("#poster17").parents("div").css("display","none");
    $("#poster18").parents("div").css("display","none");
    $("#poster19").parents("div").css("display","none");
    $("#poster20").parents("div").css("display","bnone");
    $("#poster21").parents("div").css("display","none");
    $("#poster22").parents("div").css("display","none");
    $("#poster23").parents("div").css("display","none");
    $("#poster24").parents("div").css("display","none");
    $("#poster25").parents("div").css("display","none");

    for (let z = 1; z < 26; z++) {
        if ($("#moviegenre" + z).html() == genres) {
            $("#moviegenre" + z).parents("div").css("display","block");  
        }

       var gottenyear = $("#movieyear").each(function(index, value) {
            $(this).html($(this).html().substring(0, 4)); // number of characters
       });

        if (gottenyear == year) {
            $("#moviegenre" + z).parents("div").css("display","block");  
        }

        var gottenrating = $("#movierating" + z).html(); 

        if (gottenrating == ("Rating: " + rating)) {
            $("#movierating" + z).parents("div").css("display","block");  
        }
    }
    
}
