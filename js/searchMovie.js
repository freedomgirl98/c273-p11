$(document).ready(function () {
    $("#btnSearch").click(function () {
        var title = $("#sTitle").val();
        var plot = $("#sYear").val();
        var year = $("#sPlot").val();
        $.ajax({
            url: "https://www.omdbapi.com/",
            type: "GET",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=6888a62c",
            dataType: 'jsonp',
            success: function (response) {

                var message = "";
                message += "Title: " + response.Title + "<br/>";
                message += "Released: " + response.Released + "<br/>";
                message += "Runtime: " + response.Runtime + "<br/>";
                message += "Genre: " + response.Genre + "<br/>";
                message += "Actor: " + response.Actor + "<br/>";
                message += "Plot: " + response.Plot + "<br/><br/>";
                $("#contents").html(message);
                $("#poster").html("<img src='" + response.Poster + "'/>");

                var reviews = JSON.parse(localStorage.getItem("reviews"));
                if (reviews == null) {
                    reviews = [];
                }

                reviews[reviews.length] = response;
                localStorage.setItem("reviews", JSON.stringify(reviews));




            }
        })
    });
});

