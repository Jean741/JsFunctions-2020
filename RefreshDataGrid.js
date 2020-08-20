formContainer.getComponentById($('.formio-component-var-gridMixte').attr("id")).setValue(dataResult.varArrayListeTarifGarantieParAnnee);


formContainer.getComponentById($('.formio-component-var-gridEcole').attr("id")).setValue(dataResult.varArrayListeTarifGarantieParAnnee);

function refrechDataGridEcole() {

    var datagrid = [];

    $.ajax({

        url: "http://localhost:8083/profil/experienceScolaire/numCorrespondance?numCorrespondance=" + connectedNumCorrespondance,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            for (var k in data) {
                var json = {
                    "id": data[k].experienceScolaire.id,
                    "nomEtablissement": data[k].experienceScolaire.etablissementScolaire.nomEtablissement,
                    "anneDeDiplome": data[k].experienceScolaire.anneDeDiplome
                }
                datagrid.push(json);
            }
            //console.log(datagrid);
            formContainer.data["var-gridEcole"] = datagrid;
            formContainer.getComponentById($('.formio-component-var-gridEcole').attr("id")).setValue(datagrid);


        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}



function refrechDataGridExperience() {


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
}