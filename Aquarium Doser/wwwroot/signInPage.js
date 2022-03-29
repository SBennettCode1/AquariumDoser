signInPage = {};

$(document).ready(function () {
    signInPage.bindEvents();
});

signInPage.bindEvents = function () {
    $("#nextPageButton").off().click(() => {
        window.location.replace("https://localhost:44306/index.html");
    });
}

onSignIn = function (googleUser) {
    console.log(googleUser.getBasicProfile());
    sessionStorage.setItem("userInfo", JSON.stringify(googleUser.getBasicProfile()));
}

signOut = function () {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}