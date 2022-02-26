window.onload = function () {
    $("#contentContainer").load("html/home.html", function () {
        console.log("html/home.html loaded");
    });
}