//json form
var json = {
    "idEntreprise": "1",
    "idProfil": "3",
    "idPoste": "1",
    "duree": "trois semaines"
}

$('.cc').unbind("click").click(function() {

    var json = {
        "idEntreprise": formContainer.data['var-entreprise'],
        "idProfil": connectedNumCorrespondance,
        "idPoste": formContainer.data['var-poste'],
        "duree": formContainer.data['var-dure']
    }

    console.log(json);

    $.ajax({

        url: "http://localhost:8083/experienceProfessionnelle",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(json),
        success: function(data) {

            var datagrid = [];

            $.ajax({

                url: "http://localhost:8083/profil/experienceProfessionnelle/numCorrespondance?numCorrespondance=" + connectedNumCorrespondance,
                method: "GET",
                contentType: "application/json",
                dataType: "json",
                success: function(data) {
                    for (var k in data) {
                        var json = {
                            "id": data[k].experienceProfessionnelle.id,
                            "nomEntreprise": data[k].experienceProfessionnelle.entreprise.nomEntreprise,
                            "Poste": data[k].experienceProfessionnelle.poste.intitulePoste,
                            "duree": data[k].experienceProfessionnelle.duree
                        }
                        datagrid.push(json);
                    }
                    console.log(datagrid);
                    formContainer.data["var-gridExperience"] = datagrid;
                    formContainer.getComponentById($('.formio-component-var-gridExperience').attr("id")).setValue(datagrid);


                },
                error: function(errMsg) {
                    console.log(errMsg);
                }
            });
            console.log(data);

        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });




});