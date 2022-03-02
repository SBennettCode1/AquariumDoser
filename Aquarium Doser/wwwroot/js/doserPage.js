site.doserPage = {};
site.doserPage.additiveList = {
    "additives": [
        { "name": "Seachem Flourish", "volume": 60, "quantity": 5, "volumeUnits": "US Gallons", "quantityUnits": "mL" },
        { "name": "Seachem Flourish Excel", "volume": 50, "quantity": 5, "volumeUnits": "US Gallons", "quantityUnits": "mL" }
    ]
};

$(document).ready(function () {
    site.doserPage.bindEvents();
    site.doserPage.getAdditiveData();
});

site.doserPage.bindEvents = function () {
    $("#calculateButton").off().click(() => {
        let selectedAdditive = site.doserPage.getArrayValueById($("#innerDoserSelect").val());
        let calculationResult = site.doserPage.doCalculation($("#volumeInput").val(), selectedAdditive.volume, selectedAdditive.quantity);
        console.log(calculationResult);
    });
}

site.doserPage.doCalculation = function (waterVolume, originalVolume, originalQuantity) {
    let quantityPerUnit = originalQuantity / originalVolume;
    let finalQuantity = quantityPerUnit * waterVolume;
    return finalQuantity.toFixed(5);
}

site.doserPage.getArrayValueById = function (name) {
    for (let additive of site.doserPage.additiveList.additives) {
        if (additive.name == name)
            return additive;
    }
}

site.doserPage.getAdditiveData = function (callback) {
    var url = `ApiController`;

    $.ajax({
        dataType: "json",
        url: url,
        success: function (json) {
            console.log(json);
        },
        error: function () {
            console.error("site.doserPage.getAdditiveData failed");
        }
    });
}