/*{
    "numCorrespondance": "jeaunclaude.attiglah@vneuron.com",
    "titre": "Dossier PHP"
}
*/
function doRedirect() {
    window.parent.location.assign("http://localhost/dashboard");
}

window.parent.$('.btn.btn-primary-modal.waves-light').click(function() {
    var jsonData = {

        "titre": formContainer.data['var-TitredossierE'],
        "numCorrespondance": connectedNumCorrespondance
    };
    console.log(jsonData);

    $.ajax({

        url: "http://localhost:8083/dossierCandidature",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsonData),
        success: function(data) {
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });

});

var jsonData = {

    "titre": formContainer.data['var-TitredossierE'],
    "numCorrespondance": connectedNumCorrespondance
};
console.log(jsonData);

$.ajax({

    url: "http://localhost:8083/dossierCandidature",
    method: "POST",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(jsonData),
    success: function(data) {
        console.log(data);
    },
    error: function(errMsg) {
        console.log(errMsg);
    }
});
// nouveau bon code
var jsonData = {

    "titre": formContainer.data['var-Titredossier'],
    "numCorrespondance": connectedNumCorrespondance
};
$('.sendD').unbind("click").click(function() {
    $.ajax({

        url: "http://localhost:8083/dossierCandidature",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsonData),
        success: function(data) {
            console.log(data);
            window.parent.$('.btn.btn-outline-default.lunch-process-btn').click();
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });


});

// bon code
var jsonData = {

    "titre": formContainer.data['var-Titredossier'],
    "numCorrespondance": connectedNumCorrespondance
};
$('.sendD').unbind("click").click(function() {
    $.ajax({

        url: "http://localhost:8083/dossierCandidature",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsonData),
        success: function(data) {
            console.log(data);
            window.parent.$('.btn.btn-outline-default.lunch-process-btn').click();
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });


});



// get Dossier

$.ajax({

    url: "http://localhost:8083/profil/dossierCandidature/numCorrespondance?numCorrespondance=" + connectedNumCorrespondance,
    method: "GET",
    contentType: "application/json",
    dataType: "json",
    success: function(data) {

        console.log(data);
        formContainer.getComponentById($('.formio-component-var-anne').attr("id")).setItems(data);
        //  formContainer.getComponentById($('.formio-component-var-numeroDossier').attr("id")).setItems(data);

    },
    error: function(errMsg) {
        console.log(errMsg);
    }
});