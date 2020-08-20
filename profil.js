var jsondata = {
    "numCorrespondance": data['email'],
    "nom": data['nom'],
    "prenom": data['prenom']
};
console.log(jsondata);


function send(jsondata) {
    $.ajax({

        url: "http://localhost:8083/profil",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsondata),
        success: function(data) {
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}

$('.btn.btn-outline-default').unbind("click").click(function(jsondata) {
    console.log(jsondata);
    console.log("life is  good");

    $.ajax({

        url: "http://localhost:8083/profil",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsondata),
        success: function(data) {
            alert("on a reussi")
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });

});


$('button').unbind("click").click(function() {
    cool("yes bb");
});



// grid


$('.ecole').unbind("click").click(function() {
    console.log("yes bb");
    formContainer.data["var-nom"] = "jesuis";
    formContainer.data["var-a"] = true;
    var nom = formContainer.data['var-nomEtablissement'];
    console.log(nom);

    $.ajax({

        url: "http://localhost:8083/etablissements",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: nom,
        success: function(data) {
            alert("on a reussi")
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });

});


//profil

$.ajax({

    url: "http://localhost:8083/profil/numCorrespondance?numCorrespondance=" + connectedNumCorrespondance,
    method: "GET",
    success: function(data) {

        console.log(data);
    },
    error: function(errMsg) {
        console.log(errMsg);
    }
});


function refreshProfil() {
    $.ajax({

        url: "http://localhost:8083/profil/numCorrespondance?numCorrespondance=" + connectedNumCorrespondance,
        method: "GET",
        success: function(data) {

            formContainer.getComponentById($('.formio-component-var-source').attr("id")).setValue(data.source)
            formContainer.getComponentById($('.formio-component-var-competenceUne').attr("id")).setValue(data.competenceUne)
            formContainer.getComponentById($('.formio-component-var-competenceDeux').attr("id")).setValue(data.competenceDeux)
            formContainer.getComponentById($('.formio-component-var-competenceTrois').attr("id")).setValue(data.competenceTrois)

            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}