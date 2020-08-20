/*
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

classs
-etablissement : var-nE
-entreprises : var-entreprise

getEcoleOrEtablissement("formio-component-var-nE","/etablissements")
getEcoleOrEtablissement("formio-component-var-entreprise","/entreprise")

*/

getEcoleOrEtablissement("formio-component-var-nE", "/etablissements")
getEcoleOrEtablissement("formio-component-var-entreprise", "/entreprise")

function getEcoleOrEtablissement(conmponentClass, path) {
    $.ajax({

        url: serveurSource + path,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {

            console.log(data);
            formContainer.getComponentById($('.' + conmponentClass).attr("id")).setItems(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}



const serveurSource = "http://localhost:8083";


// ******************ajouter une entreprise************************

$('.addEntreprise').unbind("click").click(function() {
    addEntreprise();
});

function addEntreprise() {
    swal("Entrez le nom d'une entreprise pour l'ajouter", {
            content: "input",
            buttons: ["Annuler", "Ajouter"]
        })
        .then((value) => {
            if (!value) throw null;
            sendEntreprise(value);
        });
}

function sendEntreprise(nomEntreprise) {
    var json = {
        "nomEntreprise": nomEntreprise
    }
    console.log(json);
    $.ajax({
        url: serveurSource + "/entreprise",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(json),
        success: function(data) {
            console.log(data);
            getEcoleOrEtablissement("formio-component-var-entreprise", "/entreprise")

            successToastr("Opération effectuée", "Entreprise ajoutée avec succes")
        },
        error: function(errMsg) {
            console.log(errMsg);
            swal({
                title: "Oops",
                text: "Cet entreprise existe probablement deja!",
                icon: "error",
                button: false
            });
        }
    });
}

// ******************ajouter une ecole************************

$('.addEcole').unbind("click").click(function() {
    addEtablissement();
});

function addEtablissement() {
    swal("Entrez le nom d'un établissement pour l'ajouter", {
            content: "input",
            buttons: {
                cancel: true,
                confirm: "Ajouter"
            }
        })
        .then((value) => {
            if (!value) throw null;
            sendEtablissement(value);
        });
}

function sendEtablissement(nomEtablissement) {
    var json = {
        "nomEtablissement": nomEtablissement
    }
    console.log(json);
    $.ajax({
        url: serveurSource + "/etablissements",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(json),
        success: function(data) {
            console.log(data);
            getEcoleOrEtablissement("formio-component-var-nE", "/etablissements")

            successToastr("Opération effectuée", "Etablissement ajouté avec succes")
        },
        error: function(errMsg) {
            console.log(errMsg);
            swal({
                title: "Oops",
                text: "Cet etablissement existe probablement deja!",
                icon: "error",
                button: false
            });
        }
    });
}