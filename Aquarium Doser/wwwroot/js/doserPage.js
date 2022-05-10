site.doserPage = {};
site.doserPage.additiveList = [];

$(document).ready(function () {
    site.doserPage.bindEvents();
    site.doserPage.renderAdditiveList();
});

site.doserPage.bindEvents = function () {
    $("#calculateButton").off().click(() => {
        if ($("#volumeInput").val() != "") {
            let selectedAdditive = site.doserPage.getArrayValueByName($("#innerDoserSelect option:selected").text());
            let calculationResult = site.doserPage.doCalculation($("#volumeInput").val(), selectedAdditive.volume, selectedAdditive.quantity);

            $("#afterCalculationText").text(calculationResult + selectedAdditive.quantityUnits);

            toastr.success(`Calculated dosage for ${selectedAdditive.name}`);
            console.log(calculationResult);
        }
        else {
            toastr.error('Volume input cannot be empty', 'ERROR', {
                "positionClass": "toast-top-center",
            });
        }
        
    });
}

site.doserPage.doCalculation = function (waterVolume, originalVolume, originalQuantity) {
    let quantityPerUnit = originalQuantity / originalVolume;
    let finalQuantity = quantityPerUnit * waterVolume;
    return finalQuantity.toFixed(5);
}

site.doserPage.getArrayValueByName = function (name) {
    for (let additive of site.doserPage.additiveList) {
        if (additive.name == name)
            return additive;
    }
}

site.doserPage.getAdditiveData = function (callback) {
    var url = `api/data`;

    $.ajax({
        dataType: "json",
        contentType: "application/json",
        url: url,
        type: "GET",
        success: function (json) {
            site.doserPage.additiveList = json;
            console.log(json);
            callback(json);
        },
        error: function () {
            console.error("site.doserPage.getAdditiveData failed");
        }
    });
}

site.doserPage.getUserData = function (callback) {
    var url = `api/UserDataByEmail?email=${site.userInfo.Bv}`;

    $.ajax({
        dataType: "json",
        url: url,
        type: "GET",
        success: function (json) {
            for (let data of json) {
                site.doserPage.additiveList.push(data);
            }
            callback(json);
        },
        error: function () {
            console.error("site.doserPage.getUserData failed");
        }
    });
}

site.doserPage.renderAdditiveList = function () {
    var s = "";

    site.doserPage.getAdditiveData(data => {
        for (let dosage of data) {
            s += `<option>${dosage.name}</option>`;
        }

        site.doserPage.getUserData(data => {
            for (let dosage of data) {
                s += `<option>${dosage.name}</option>`;
            }

            $("#innerDoserSelect").html(s);
        });

    });
}