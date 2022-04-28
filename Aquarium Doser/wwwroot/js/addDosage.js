site.addDosage = {};

$(document).ready(function () {
    site.addDosage.bindEvents();
});

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
            },

            error: function () {
                console.error("post user data ajax call failed");
            }
        });
    });
}
