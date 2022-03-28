
onSignIn = function (googleUser) {
    console.log(googleUser.getBasicProfile());

    window.location.replace("https://localhost:44306/index.html");
}

signOut = function () {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}