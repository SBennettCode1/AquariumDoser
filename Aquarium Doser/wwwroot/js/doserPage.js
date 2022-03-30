site.doserPage = {};
site.doserPage.additiveList = [];

$(document).ready(function () {
    site.doserPage.bindEvents();
    site.doserPage.getAdditiveData(data => {
        let s = "";
        for (let dosage of data) {
            s += `<option value="Seachem Flourish">${dosage.name}</option>`;
        }
        $("#innerDoserSelect").html(s);
    });
});
let options = {
    "positionClass": "toast-top-center",
};
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
            toastr.error('Volume input cannot be empty', 'ERROR', options);
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