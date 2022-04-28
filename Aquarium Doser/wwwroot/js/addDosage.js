site.addDosage = {};

$(document).ready(function () {
    site.addDosage.bindEvents();
    site.addDosage.renderDeleteBox();
});
//$("#deleteDosageSelect option:selected").val()

site.addDosage.bindEvents = function () {
    $("#addDosageButton").off().click(() => {
        var url = `api/NewUserData`;

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: url,

            data: JSON.stringify({
                "name": $("#addDosageNameInput").val(),
                "volume": Number($("#addDosageVolumeInput").val()),
                "volumeUnits": $("#addDosageVolumeUnitInput option:selected").text(),
                "quantity": Number($("#addDosageQuantityInput").val()),
                "quantityUnits": $("#addDosageQuantityUnitInput option:selected").text(),
                "email": site.userInfo.Bv
            }),

            success: function (json) {
                console.log(json);
                site.addDosage.renderDeleteBox();
            },

            error: function () {
                console.error("post user data ajax call failed");
            }
        });
    });

    $("#deleteDosageButton").off().click(() => {
        site.addDosage.deleteUserData($("#deleteDosageSelect option:selected").val());
    });
}

site.addDosage.getUserDataByEmail = function (callback, email) {
    var url = `api/UserDataByEmail?email=${email}`;

    $.ajax({
        dataType: "json",
        url: url,
        type: "GET",
        success: function (json) {
            callback(json);
        },
        error: function () {
            console.error("site.addDosage.getUserDataByEmail failed");
        }
    });
}

site.addDosage.deleteUserData = function (userDataId) {
    var url = `api/UserDataById?userDataId=${userDataId}`;

    $.ajax({
        dataType: "json",
        url: url,
        type: "DELETE",
        success: function (json) {
            site.addDosage.renderDeleteBox();
        },
        error: function () {
            console.error("site.addDosage.deleteUserData failed");
        }
    });
}

site.addDosage.renderDeleteBox = function () {
    site.addDosage.getUserDataByEmail(data => {
        let s = "";

        for (let dosage of data) {
            s += `<option value="${dosage.id}">${dosage.name}</option>`;
        }
        $("#deleteDosageSelect").html(s);

    }, site.userInfo.Bv);
}