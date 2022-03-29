site.home = {};

$(document).ready(function () {
    site.home.bindEvents();
    $("#welcomeText").text("Welcome to Aquarium Doser, " + site.userInfo.VX + "!");
});

site.home.bindEvents = function () {
    $("#userGuideButton").off().click(() => {
        $("#contentContainer").load("html/guide.html", function () {
            console.log("html/guide.html loaded");
        });
    });
    $("#signOutRedirect").off().click(() => {
        window.location.replace("https://localhost:44306/signInPage.html");
    });
}