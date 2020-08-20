var done = 0;
if (done == 0) {

    $('.ss').unbind("click").click(function() {
        console.log("On va envoyer klkchz");
        formContainer.data["var-nom"] = "jesuis";
        formContainer.data["var-a"] = "2";
        console.log(formContainer.data['var-nE']);
        var nom = {

            "idEcole": formContainer.data['var-nE'],
            "idProfil": connectedNumCorrespondance
        };
        console.log(nom);

        $.ajax({

            url: "http://localhost:8083/etablissements",
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(nom),
            success: function(data) {
                alert("on a reussi")
                console.log(data);
            },
            error: function(errMsg) {
                console.log(errMsg);
            }
        });

    });
    console.log("ok");
    done = 1;
}







//get Experiences Scolaire

$('.cc').unbind("click").click(function() {

    var experienses = {

        "idEcole": formContainer.data['var-nE'],
        "idProfil": connectedNumCorrespondance
    };

    var datagrid = [];
    $.ajax({

        url: "http://localhost:8083/profil/experienceScolaire/numCorrespondance?numCorrespondance=" + connectedNumCorrespondance,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            for (var k in data) {
                json = {
                    "id": data[k].experienceScolaire.id,
                    "nomEtablissement": data[k].experienceScolaire.etablissementScolaire.nomEtablissement,
                    "anneDeDiplome": data[k].experienceScolaire.anneDeDiplome
                }
                datagrid.push(json);
            }
            console.log(datagrid);
            formContainer.data["var-gridEcole"] = datagrid;
            formContainer.getComponentById($('.formio-component-var-gridEcole').attr("id")).setValue(datagrid);


        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });

});

var datagrid = [];
console.log(datagrid);
for (var k in data) {
    json = {
        "id": data[k].experienceScolaire.id,
        "nomEtablissement": data[k].experienceScolaire.etablissementScolaire.nomEtablissement,
        "anneDeDiplome": data[k].experienceScolaire.anneDeDiplome
    }
    datagrid.push(json);
}
console.log(datagrid);



function deleteExperienceScolaire(id) {

    $.ajax({

        url: "http://localhost:8083/experienceScolaire/id?id=" + id,
        method: "DELETE",
        contentType: "application/json",
        success: function(data) {
            console.log(("effevctue"));
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}