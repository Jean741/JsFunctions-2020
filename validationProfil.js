//ValidationProfil

//changement de role
/*
admin=1
gest=2
Dossier=4
Postuler = 5
profil =7
compte = 8
*/
function setRoleProfil() {
    $.ajax({
        url: "/alfresco/s/iptech/genericService?name=setRoleProfil&numeroCorespondance=" + connectedNumCorrespondance,
        method: "GET",
        success: function(data) {
            console.log(data);
            doRedirect()
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}

function doRedirect() {
    window.parent.location.assign("http: //localhost/dashboard");
}

function validerProfil() {
    var jsondata = {
        "numCorrespondance": connectedNumCorrespondance,
        "competenceUne": data['var-competenceUne'],
        "competenceDeux": data['var-competenceDeux'],
        "competenceTrois": data['var-competenceTrois'],
        "source": data['var-source']
    };
    console.log(jsondata);
    $.ajax({

        url: "http://localhost:8083/profil",
        method: "PUT",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsondata),
        success: function(data) {
            console.log(data);
            setRoleProfil()
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });


}

$('.validerProfil').unbind("click").click(function() {
    validerProfil()
});