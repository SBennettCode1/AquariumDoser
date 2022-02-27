site.home = {};

$(document).ready(function () {
    site.home.bindEvents();
});

site.home.bindEvents = function () {
    $("#userGuideButton").off().click(() => {
        $("#contentContainer").load("html/guide.html", function () {
            console.log("html/guide.html loaded");
        });
    });
}