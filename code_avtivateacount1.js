$('.validPage2').unbind("click").click(function() {

    formContainer.validateForm();
    // if (($('.pwdPanel .has-error:not(:hidden)').length)<=0) {

    if ($('.form-group .has-error:not(:hidden)').length <= 0) {

        var role = formContainer.data['var-typeCompte'];




        var jsondata = {

            "username": formContainer.data['var-email'],
            "email": formContainer.data['var-email'],
            "numCorrespondance": formContainer.data['var-codeDeTuring'],
            "firstName": formContainer.data['var-nom'],
            "lastName": formContainer.data['var-prenom'],
            "password": formContainer.data['var-motDePasse'],
            "role": role

        };
        $.ajax({
            url: "http://localhost/extranet-portal/register-client/activate-account",
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(jsondata),
            success: function(data) {

                window.parent.$('.btn.btn-outline-default.lunch-process-btn').click();

                console.log(data);
                //valid = true;

            },


            error: function(errMsg) {
                if (errMsg.status == 412) {
                    $('.existeDeja').css("display", "block");

                }
                console.log(errMsg);
                //valid = 'recaptcha must be not null';

            }

        });


    }
    // } 
});



//create account

var jsondata = {

    "username": data['var-email'],
    "email": data['var-email'],
    "numCorrespondance": data['var-email'],
    "firstName": data['var-nom'],
    "lastName": data['var-prenom'],
    "password": data['var-password'],
    "role": "GUEST"
};

function send(jsondata) {
    $.ajax({

        url: "http://localhost/extranet-portal/register-client/activate-account",
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



//bON CODE

var jsondata = {

    "username": data['var-email'],
    "email": data['var-email'],
    "numCorrespondance": data['var-email'],
    "firstName": data['var-nom'],
    "lastName": data['var-prenom'],
    "password": data['var-password'],
    "role": "GUEST"
};

var jsondata2 = {
    "numCorrespondance": data['var-email']
};

$('.send').unbind("click").click(function() {
    $.ajax({

        url: "http://localhost/extranet-portal/register-client/activate-account",
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


    $.ajax({

        url: "http://localhost:8083/profil",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(jsondata2),
        success: function(data) {
            console.log(data);
        },
        error: function(errMsg) {
            console.log(errMsg);
        }
    });
});