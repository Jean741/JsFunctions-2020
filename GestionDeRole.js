//changement de role
/*
admin=1
gest=2
Dossier=4
Postuler = 5
profil =7
compte = 8
*/

function setRoleCompte() {
    $.ajax({

        url: "/alfresco/s/iptech/genericService?name=setRoleCompte&numeroCorespondance=" + data['var-email'],
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

function setRoleProfil(params) {
    $.ajax({

        url: "/alfresco/s/iptech/genericService?name=setRoleProfil&numeroCorespondance=" + connectedNumCorrespondance,
        method: "GET",
        success: function(data) {
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}

function setRoleDossier(params) {
    $.ajax({

        url: "/alfresco/s/iptech/genericService?name=setRoleDossier&numeroCorespondance=" + connectedNumCorrespondance,
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


function setRolePostuler(params) {
    $.ajax({

        url: "/alfresco/s/iptech/genericService?name=setRolePostuler&numeroCorespondance=" + connectedNumCorrespondance,
        method: "POST",
        data: JSON.stringify(jsondata),
        success: function(data) {
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
}