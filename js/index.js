$(document).ready(function () {
//    var reviews = JSON.parse(localStorage.getItem("reviews"));
////        alert("a");
//    if (reviews != null) {
//        var message = "";
//        message += "Title: " + reviews.title + "<br/>";
//        message += "Plot: " + reviews.plot + "<br/>";
//        $("#contents").html(message);
//    }

    var movies = JSON.parse(localStorage.getItem("reviews"));
    var message = "";
    if (movies == null) {
        message = "There are no movies searched."
        movies = [];
    } else {
//    alert("a");
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var title = movie.Title + "<br/>";
        var plot = movie.Plot + "<br/>";
    }
    $("#title").html(title);
    $("#plot").html(plot);
//        alert("a");
    $("#contents").html(message);
//    var movie = {};
//    movies[movies.length] = movie
    localStorage.setItem("reviews", JSON.stringify(movies));

//    $("#btnSubmit").click(function () {
//        var person = {};
//        person.name = $("[name=name]").val();
//        person.email = $("[name=email]").val();
//        person.postalCode = $("[name=postalCode]").val();
//
//        persons[persons.length] = person;
//        localStorage.setItem("persons", JSON.stringify(persons));
//
//    });
    }

});


