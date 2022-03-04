var site = {};
site.index = {};

$(document).ready(function () {
    $("#contentContainer").load("html/home.html", function () {
        console.log("html/home.html loaded");
    });
    site.index.bindEvents();
});

site.index.bindEvents = function () {
    $("#homeListItem").off().click(() => {
        $("#contentContainer").load("html/home.html", function () {
            console.log("html/home.html loaded");
        });
    });

    $("#doserListItem").off().click(() => {
        $("#contentContainer").load("html/doserPage.html", function () {
            console.log("html/doserPage.html loaded");
        });
    });

    $("#addDosageListItem").off().click(() => {
        $("#contentContainer").load("html/addDosage.html", function () {
            console.log("html/addDosage.html loaded");
        });
    });

}